import type {Metadata, Viewport} from 'next'
import {Passion_One, Roboto_Mono} from 'next/font/google'
import './globals.css'
import {cn} from '@/utils/cn'
import {NotificationBar} from '@/components/notification-bar'

const passionOne = Passion_One({subsets: ['latin'], weight: '400', preload: true, display: 'swap', variable: '--font-passion-one'})
const robotoMono = Roboto_Mono({subsets: ['latin'], weight: '400', preload: true, display: 'swap', variable: '--font-roboto-mono'})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? 'https://app.localfirstconf.com' : 'http://localhost:3000'),
  title: {
    template: '%s – Local-First Conf 2024',
    default: 'Local-First Conf 2024'
  },
  description:
    'Join us for the world’s first local-first conference. Connect with a rapidly-growing community in an intimate setting. Berlin, May 30 and 31 2024.',
  applicationName: 'Local-First Conf 2024',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Local-First Conf 2024'
  }
}

export const viewport: Viewport = {
  themeColor: '#EF8AF9'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(passionOne.variable, robotoMono.variable, 'bg-black font-mono text-white')}>
        <NotificationBar />
        {children}
      </body>
    </html>
  )
}
