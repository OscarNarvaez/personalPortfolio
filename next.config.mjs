/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repositoryName.endsWith(".github.io");
const basePath = isGithubActions && repositoryName && !isUserSite ? `/${repositoryName}` : "";

const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath || undefined,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
        unoptimized: true,
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
