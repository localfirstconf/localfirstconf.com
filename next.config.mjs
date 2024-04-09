/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/schedule',
        permanent: false
      }
    ]
  }
}

export default nextConfig
