import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      "/concept-neatch.html",
      "/concept-neatch-glacier.html",
      "/concept-neatch-editorial.html",
      "/concept-neatch-cyberpunk.html",
    ].map((source) => ({ source, destination: "/", permanent: true }));
  },
};

export default nextConfig;
