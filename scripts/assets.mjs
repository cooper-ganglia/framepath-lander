import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
const source = process.argv[2];
if (!source) throw new Error("Pass the generated contact-sheet PNG path");
await mkdir("public/assets", { recursive: true });
const metadata = await sharp(source).metadata();
const w = Math.floor(metadata.width / 3),
  h = Math.floor(metadata.height / 2);
for (let i = 0; i < 6; i++) {
  await sharp(source)
    .extract({
      left: (i % 3) * w,
      top: Math.floor(i / 3) * h,
      width: w,
      height: h,
    })
    .resize(800, 450, { fit: "cover", position: "centre" })
    .webp({ quality: 84 })
    .toFile(`public/assets/media-${i}.webp`);
}
for (let i = 0; i < 6; i++)
  await sharp(`public/assets/media-${i}.webp`)
    .resize(400, 225)
    .webp({ quality: 80 })
    .toFile(`public/assets/media-${i}-small.webp`);
await sharp("public/assets/logo.png")
  .resize({ width: 420 })
  .png()
  .toFile("public/assets/logo-optimized.png");
const background = `<svg width="1200" height="630"><rect width="1200" height="630" fill="#080e20"/><path d="M0 450H1200" stroke="#293750"/><text x="70" y="250" fill="#e8edf7" font-family="Arial,sans-serif" font-size="66" font-weight="600">Your media stays yours.</text><text x="70" y="330" fill="#9fadc3" font-family="Arial,sans-serif" font-size="30">Your footage. Your storage. Your infrastructure.</text><text x="70" y="530" fill="#67d6e8" font-family="Arial,sans-serif" font-size="22">LOCAL-FIRST MEDIA ASSET MANAGEMENT</text><text x="70" y="582" fill="#9fadc3" font-family="Arial,sans-serif" font-size="18">FRAMEPATH.AI · A PRODUCT BY ODDFORM</text></svg>`;
await sharp(Buffer.from(background))
  .composite([
    {
      input: await sharp("public/assets/logo.png")
        .resize({ width: 260 })
        .toBuffer(),
      top: 50,
      left: 65,
    },
  ])
  .png()
  .toFile("public/assets/social-preview.png");
await writeFile(
  "docs/ASSET_PROVENANCE.md",
  `# Asset provenance\n\nSupplied Framepath PNG logo and icon reused unchanged in identity; a resized wordmark variant is provided. Original references remain unchanged.\n\nSix fictional cinematic media stills use a single original contact sheet generated with the built-in imagegen tool, then sliced, center-cropped and WebP encoded for responsive web delivery. No customer media or third-party entertainment stills were used.\n\nGeneration source: ${source}\n\nPrompt: Photorealistic cinematic contact sheet, exact 3-column × 2-row grid, fictional stadium at dusk, cheering spectators, campus at sunset, woman engineer documentary interview, construction cranes at sunset, and blue-lit concert crowd. No text, logos or watermarks. Realistic editorial video stills with restrained grading.\n\nSocial preview composed from original SVG typography and the supplied wordmark.\n`,
);
