import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "SMKN6MALANG"; 

const nextConfig: NextConfig = {
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "smkn6malang.sch.id",
      },
      {
        protocol: "https",
        hostname: "deifkwefumgah.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  output: isGithubPages ? "export" : "standalone",
  basePath: isGithubPages ? `/${repoName}` : "",
};

export default nextConfig;
