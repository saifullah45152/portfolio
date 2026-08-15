import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/portfolio' : '', // leave empty for user page, or '/repo-name' for project page
  assetPrefix: isProd ? '/portfolio/' : '', // ensures portfolio files load correctly
  images: {
    unoptimized: true, // optional: disables next/image optimization for GH Pages
  },
};

export default nextConfig;
