import {InstagramIcon} from '@/components/icons/instagram'
import {LinkedinIcon} from '@/components/icons/linkedin'
import {MastodonIcon} from '@/components/icons/mastodon'
import {TwitterIcon} from '@/components/icons/twitter'
import {WhatsappIcon} from '@/components/icons/whatsapp'
import {QRButton} from '@/components/qr-button'
import {SpeakerBadge} from '@/components/speaker-badge'
import {WorkshopHostBadge} from '@/components/workshop-host-badge'
import {cn} from '@/utils/cn'
import {EnvelopeIcon, GlobeAltIcon} from '@heroicons/react/20/solid'
import {allProfiles, allSessions} from 'contentlayer/generated'
import {addMinutes, format} from 'date-fns'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import QRCode from 'react-qr-code'

export async function generateStaticParams() {
  return allProfiles.map((profile) => ({
    slug: profile.slug
  }))
}

export default function AttendeePage({params: {slug}}: {params: {slug: string}}) {
  const profile = allProfiles.find((profile) => profile.slug === slug)
  if (!profile) notFound()

  const Content = useMDXComponent(profile.body.code)
  const sessions = allSessions.filter((session) => session.speaker === slug)

  return (
    <div className="w-full max-w-3xl gap-8 px-4 py-24 md:px-0">
      <div className="flex flex-col-reverse gap-x-16 gap-y-8 md:flex-row">
        <div>
          <h1 className="font-display text-5xl uppercase leading-none">{profile.name}</h1>
          {(profile.speaker || profile.workshopHost) && (
            <div className="mt-2 flex gap-4">
              {profile.speaker && <SpeakerBadge />}
              {profile.workshopHost && <WorkshopHostBadge />}
            </div>
          )}
          <div className="prose prose-sm prose-neutral prose-invert mt-8 text-neutral-400">
            <Content />
          </div>
          {profile.email && (
            <Link href={`mailto:${profile.email}`} className="mt-8 block">
              Email: {profile.email}
            </Link>
          )}
          <ul className="mt-8 flex flex-wrap gap-2">
            {profile.email && (
              <li>
                <Link href={`mailto:${profile.email}`} className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-blue">
                  <EnvelopeIcon className="size-5 text-black" />
                </Link>
              </li>
            )}
            {profile.whatsapp && (
              <li>
                <Link
                  href={`https://wa.me/${profile.whatsapp}`}
                  className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-green-600"
                >
                  <WhatsappIcon className="size-5 text-black" />
                </Link>
              </li>
            )}
            {profile.twitter && (
              <li>
                <Link href={profile.twitter} className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-blue">
                  <TwitterIcon className="size-5 text-black" />
                </Link>
              </li>
            )}
            {profile.mastodon && (
              <li>
                <Link href={profile.mastodon} className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-blue">
                  <MastodonIcon className="size-5 text-black" />
                </Link>
              </li>
            )}
            {profile.linkedin && (
              <li>
                <Link href={profile.linkedin} className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-blue">
                  <LinkedinIcon className="size-5 text-black" />
                </Link>
              </li>
            )}
            {profile.instagram && (
              <li>
                <Link href={profile.instagram} className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-orange">
                  <InstagramIcon className="size-5 text-black" />
                </Link>
              </li>
            )}
            {profile.website && (
              <li>
                <Link href={profile.website} className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-magenta">
                  <GlobeAltIcon className="size-5 text-black" />
                </Link>
              </li>
            )}
          </ul>
          <QRButton url={`https://app.localfirstconf.com/profile/${profile.slug}`} />
        </div>
        <div className="relative size-64 shrink-0">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className="object-contain object-center transition-transform duration-150 ease-in-out group-hover:scale-105"
          />
          {profile.avatar.startsWith('https://') && (
            <svg viewBox="0 0 689 689" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 fill-current text-black">
              <path fillRule="evenodd" clipRule="evenodd" d="M233 0H0V689H558.5H689V0H233ZM233 0L643.5 92V591L558.5 689L35 571V302L233 0Z" />
            </svg>
          )}
        </div>
      </div>
      {sessions.length > 0 && (
        <>
          <h2 className="mt-16 font-display text-4xl uppercase leading-none md:mt-24">Sessions</h2>
          <ul className="mt-4 space-y-4">
            {sessions.map(({title, start, duration, path}, index) => (
              <li key={index}>
                <Link href={path} className="block bg-neutral-300 p-5 pb-6 text-sm text-neutral-500 transition-colors duration-150 hover:bg-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={cn(
                          'font-display text-xl uppercase leading-none text-black md:text-2xl',
                          duration < 15 && 'line-clamp-1 group-hover:line-clamp-none'
                        )}
                      >
                        <Link href={path}>{title}</Link>
                      </h3>
                    </div>
                    <div className="shrink-0 text-right leading-tight">
                      <div>{`${format(new Date(start), 'HH:mm')}`}</div>
                      <div>{format(addMinutes(new Date(start), duration), 'HH:mm')}</div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
