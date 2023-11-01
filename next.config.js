/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  experimental: { appDir: true },
};

module.exports = nextConfig;
