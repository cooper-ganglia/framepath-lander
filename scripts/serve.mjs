import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const port = Number(process.env.PORT || 3101);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
};
http
  .createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://localhost");
      let file = path.resolve(root, "." + decodeURIComponent(url.pathname));
      if (file !== root && !file.startsWith(root + path.sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      try {
        if ((await stat(file)).isDirectory())
          file = path.join(file, "index.html");
      } catch {}
      let data;
      try {
        data = await readFile(file);
      } catch {
        file = path.join(root, "404.html");
        data = await readFile(file);
        res.statusCode = 404;
      }
      res.setHeader(
        "Content-Type",
        mime[path.extname(file)] || "application/octet-stream",
      );
      res.setHeader("X-Content-Type-Options", "nosniff");
      const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
      if (range && res.statusCode !== 404) {
        const start = Number(range[1]);
        const end = range[2]
          ? Math.min(Number(range[2]), data.length - 1)
          : data.length - 1;
        if (start > end || start >= data.length) {
          res.writeHead(416, { "Content-Range": `bytes */${data.length}` });
          res.end();
          return;
        }
        res.writeHead(206, {
          "Accept-Ranges": "bytes",
          "Content-Range": `bytes ${start}-${end}/${data.length}`,
          "Content-Length": end - start + 1,
        });
        res.end(
          req.method === "HEAD" ? undefined : data.subarray(start, end + 1),
        );
      } else {
        res.setHeader("Accept-Ranges", "bytes");
        res.setHeader("Content-Length", data.length);
        res.end(req.method === "HEAD" ? undefined : data);
      }
    } catch {
      res.writeHead(400);
      res.end("Bad request");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Framepath production preview: http://127.0.0.1:${port}`),
  );
