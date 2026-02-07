/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@finance/ui",
    "@finance/api-sdk",
    "@finance/auth-sdk",
    "@finance/utils",
  ],
};

export default nextConfig;
