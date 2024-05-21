import {InstagramIcon} from '@/components/icons/instagram'
import {LinkedinIcon} from '@/components/icons/linkedin'
import {TwitterIcon} from '@/components/icons/twitter'
import {WhatsappIcon} from '@/components/icons/whatsapp'
import {EnvelopeIcon, GlobeAltIcon} from '@heroicons/react/20/solid'
import {allProfiles} from 'contentlayer/generated'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import QRCode from 'react-qr-code'

export default function AttendeePage({params: {slug}}: {params: {slug: string}}) {
  const profile = allProfiles.find((profile) => profile.slug === slug)
  if (!profile) notFound()

  const Content = useMDXComponent(profile.body.code)

  return (
    <div className="w-full max-w-3xl gap-8 px-4 py-24 md:px-0">
      <div className="flex flex-col-reverse gap-x-16 gap-y-8 md:flex-row">
        <div>
          <h1 className="font-display text-5xl uppercase leading-none">{profile.name}</h1>
          <div className="prose prose-sm prose-neutral prose-invert mt-8 text-neutral-400">
            <Content />
          </div>
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
              <path fill-rule="evenodd" clip-rule="evenodd" d="M233 0H0V689H558.5H689V0H233ZM233 0L643.5 92V591L558.5 689L35 571V302L233 0Z" />
            </svg>
          )}
        </div>
      </div>
      <ul className="mt-16 flex flex-wrap gap-2">
        {profile.email && (
          <li>
            <Link href={`mailto:${profile.email}`} className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-blue">
              <EnvelopeIcon className="size-5 text-black" />
            </Link>
          </li>
        )}
        {profile.whatsapp && (
          <li>
            <Link href={`https://wa.me/${profile.whatsapp}`} className="flex size-12 items-center justify-center rounded-full bg-white hover:bg-green-600">
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
      <div className="mt-16 size-64">
        <QRCode
          size={256}
          style={{height: 'auto', maxWidth: '100%', width: '100%'}}
          value={`https://app.localfirstconf.com/profile/${profile.slug}`}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  )
}
