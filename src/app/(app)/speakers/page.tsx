import {allSpeakers} from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'

export default function SpeakersPage() {
  return (
    <div className="w-full max-w-3xl px-4 py-24 md:px-0">
      <div className="mb-1 uppercase tracking-widest text-orange md:text-lg">Speakers</div>
      <h1 className="font-display text-4xl uppercase leading-none md:text-6xl">Hear from the World&apos;s best Local-First Builders</h1>
      <ul className="mt-16 grid grid-cols-2 gap-y-16 md:grid-cols-3">
        {allSpeakers
          .sort((a, b) => a.order - b.order)
          .map(({name, attributes, avatar, slug}, index) => (
            <li key={index}>
              <Link href={`/speakers/${slug}`} className="group flex flex-col items-center">
                <div className="relative aspect-square w-full">
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    className="object-contain object-center transition-transform duration-150 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-8 text-center font-display text-2xl uppercase leading-none">{name}</h2>
                <ul className="mt-2 text-center">
                  {attributes.map((attribute, index) => (
                    <li key={index}>{attribute}</li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
