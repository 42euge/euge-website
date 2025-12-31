import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  basePath: "/euge-website",
  assetPrefix: "/euge-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
