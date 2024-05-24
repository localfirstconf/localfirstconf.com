import {withContentlayer} from 'next-contentlayer'
import NextPWA from '@ducanh2912/next-pwa'
import {nanoid} from 'nanoid'
import getStaticPrecacheEntries from './src/utils/get-static-precache-entries.js'
import getDynamicPrecacheEntries from './src/utils/get-dynamic-precache-entries.js'

const buildId = nanoid()

const withPWA = NextPWA({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  fallbacks: {
    document: '/offline'
  },
  workboxOptions: {
    disableDevLogs: true
  },
  additionalManifestEntries: [...getStaticPrecacheEntries(), ...getDynamicPrecacheEntries(buildId)]
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => buildId,
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
