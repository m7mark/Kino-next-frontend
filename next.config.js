/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
  },
  async rewrites() {
    return [
      // {
      //   source: '/api/:path*',
      //   destination: 'http://localhost:4200/api/:path*',
      // },
      {
        source: '/uploads/:path*',
        destination: `${process.env.NEXT_PUBLIC_APP_API_URL}/uploads/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
