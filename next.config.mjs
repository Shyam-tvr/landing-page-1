/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static build
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  trailingSlash: true, // 👈 required for AWS S3/CloudFront hosting
  images: {
    unoptimized: true, // required when using <Image /> with static export
  },
  eslint: {
    ignoreDuringBuilds: true, // prevents build from failing due to ESLint
  },
};

export default nextConfig;