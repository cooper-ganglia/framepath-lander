import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES === "true" ? "/framepath" : "";

const config: NextConfig = {
  turbopack: { root: process.cwd() },
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  basePath,
};

export default config;
