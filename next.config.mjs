import {withContentlayer} from 'next-contentlayer'
import NextPWA from '@ducanh2912/next-pwa'

const withPWA = NextPWA({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  fallbacks: {
    document: '/offline' // if you want to fallback to a custom page rather than /_offline
  },
  workboxOptions: {
    disableDevLogs: true
  }
})

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
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 'adamwiggins.com'
      }
    ]
  }
}

export default withPWA(withContentlayer(nextConfig))
