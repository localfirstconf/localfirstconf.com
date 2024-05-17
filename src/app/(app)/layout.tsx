import {MobileNavigation} from '@/components/mobile-navigation'
import {Sidebar} from '@/components/sidebar'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex w-full grow justify-center pb-12 md:pb-0 md:pl-48">{children}</main>
      <MobileNavigation />
    </div>
  )
}
