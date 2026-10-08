
import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const config: NextConfig = {
  turbopack: { root: process.cwd() },
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  basePath: isGitHubPages ? "/framepath-lander" : "",
  assetPrefix: isGitHubPages ? "/framepath-lander" : "",
};

export default config;
