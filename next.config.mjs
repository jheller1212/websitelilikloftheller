/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/websitelilikloftheller",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
