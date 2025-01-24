import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.resolve.alias.canvas = false

    return config
  },
}

export default nextConfig
