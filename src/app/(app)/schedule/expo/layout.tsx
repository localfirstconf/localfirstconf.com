'use client'

import {SchedulePage} from '@/components/schedule-page'
import {cn} from '@/utils/cn'
import {usePathname} from 'next/navigation'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const centered = pathname.split('/').length === 3

  return (
    <div className="flex w-full gap-16">
      <div className={cn('duration-300 ease-in-out md:transition-transform', centered ? 'md:translate-x-1/2' : 'md:translate-x-0')}>
        <SchedulePage>
          <div className="mb-1 uppercase tracking-widest text-orange md:text-lg">Local-First Conf</div>
          <h1 className="font-display text-4xl uppercase leading-none md:text-7xl">Expo Day Schedule</h1>
          <p className="mb-16 mt-8">
            The expo day is on May 31, 2024. The venue is Gitbutler&apos;s offices, located at{' '}
            <a href="https://maps.app.goo.gl/xCNcnbg29AhsCwmv7" target="_blank" rel="noreferrer" className="underline">
              Schönhauser Allee 43a/44, 10435 Berlin
            </a>
            .
          </p>
        </SchedulePage>
      </div>
      {children}
    </div>
  )
}
