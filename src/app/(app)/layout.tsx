import {Sidebar} from '@/components/sidebar'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex w-full grow justify-center pl-64">{children}</main>
    </div>
  )
}
