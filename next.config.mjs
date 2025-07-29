/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This disables blocking build for lint errors
  },
};

export default nextConfig;
