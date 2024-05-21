import {allProfiles} from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

export default function SpeakersPage() {
  return (
    <div className="w-full max-w-3xl px-4 py-24 md:px-0">
      <div className="mb-1 uppercase tracking-widest text-orange md:text-lg">Speakers</div>
      <h1 className="font-display text-4xl uppercase leading-none md:text-6xl">Hear from the World&apos;s best Local-First Builders</h1>
      <ul className="mt-16 grid grid-cols-2 gap-y-16 md:grid-cols-3">
        {allProfiles
          .filter((profile) => profile.speaker)
          .sort((a, b) => a.order - b.order)
          .map(({name, role, avatar, slug}, index) => (
            <li key={index}>
              <Link href={`/profile/${slug}`} className="group flex flex-col items-center">
                <div className="relative aspect-square w-full transition-transform duration-150 ease-in-out group-hover:scale-105">
                  <Image src={avatar} alt={name} fill className="object-contain object-center" />
                  {avatar.startsWith('https://') && (
                    <svg viewBox="0 0 689 689" xmlns="http://www.w3.org/2000/svg" className="absolute -inset-px fill-current text-black">
                      <path fillRule="evenodd" clipRule="evenodd" d="M233 0H0V689H558.5H689V0H233ZM233 0L643.5 92V591L558.5 689L35 571V302L233 0Z" />
                    </svg>
                  )}
                </div>
                <h2 className="mt-8 text-center font-display text-2xl uppercase leading-none">{name}</h2>
                <p className="mt-2 text-center">{role}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
