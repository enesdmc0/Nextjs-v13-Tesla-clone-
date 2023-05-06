/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tesla-cdn.thron.com"
      }
    ]
  }
}

module.exports = nextConfig
