import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
  eslint: {
    // Não roda ESLint em produção/deploy
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
