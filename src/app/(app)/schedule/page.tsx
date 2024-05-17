import Link from 'next/link'

export default function SchedulePage() {
  return (
    <div className="grid w-full max-w-3xl grid-cols-2 gap-8 px-4 py-24 md:px-0">
      <div className="col-span-2 text-center">
        <h1 className="font-display text-6xl uppercase leading-none md:text-[5rem]">Schedule</h1>
        <p className="mb-16 mt-8 text-center">
          Welcome to Local-First Conf 2024, taking place on May 30 (conference) and 31 (expo day) in Berlin, Germany. Choose a day below to see the schedule.
        </p>
      </div>
      <Link href="/schedule/conference" className="group relative">
        <svg
          viewBox="0 0 610 688"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full scale-90 fill-current text-magenta opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
        >
          <path d="M97 687.5L0 121L469 0L609.5 209.5V602L97 687.5Z" />
        </svg>
        <svg
          viewBox="0 0 621 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 fill-current text-white transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:opacity-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M477.18 0.273804L620.5 213.979V612.235L98.9121 699.251L0.295166 123.308L477.18 0.273804ZM11.705 130.692L107.088 687.749L610.5 603.765V217.021L472.82 11.7262L11.705 130.692Z"
          />
        </svg>
        <h2 className="absolute inset-0 flex items-center justify-center font-display text-2xl uppercase leading-none group-hover:text-black md:text-5xl">
          Conference
        </h2>
      </Link>
      <Link href="/schedule/expo" className="group relative">
        <svg
          viewBox="0 0 609 689"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full scale-90 fill-current text-magenta opacity-0 transition-all duration-200 ease-in-out group-hover:scale-100 group-hover:opacity-100"
        >
          <path d="M198.5 0L0.5 302V571L524 689L609 591V92L198.5 0Z" fill="#E28FF4" />
        </svg>
        <svg
          viewBox="0 0 619 701"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 fill-current text-white transition-all duration-200 ease-in-out group-hover:scale-110 group-hover:opacity-0"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M201.216 0.364136L619 93.9966V598.866L530.818 700.535L0.5 580.998V306.507L201.216 0.364136ZM205.784 11.6359L10.5 309.493V573.002L527.182 689.465L609 595.134V102.003L205.784 11.6359Z"
          />
        </svg>
        <h2 className="absolute inset-0 flex items-center justify-center font-display text-2xl uppercase leading-none group-hover:text-black md:text-5xl">
          Expo Day
        </h2>
      </Link>
    </div>
  )
}
