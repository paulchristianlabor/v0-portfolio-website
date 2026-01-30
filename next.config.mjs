/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/v0-portfolio-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v0-portfolio-website/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
