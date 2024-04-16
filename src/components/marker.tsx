import {cn} from '@/utils/cn'

export const Marker: React.FC<{className?: string}> = ({className}) => {
  return (
    <svg viewBox="0 0 236 58" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('fill-current', className)}>
      <path d="M232.577 22.4358C237.147 25.6191 237.147 32.381 232.577 35.5643L202.42 56.5727C199.504 58.604 195.598 58.4683 192.83 56.2396L166.739 35.2311C166.645 35.1557 166.553 35.0786 166.464 35L2.88085e-05 35L2.9333e-05 23L166.464 23C166.553 22.9214 166.645 22.8444 166.739 22.7689L192.83 1.76046C195.598 -0.468246 199.504 -0.603932 202.42 1.42735L232.577 22.4358Z" />
    </svg>
  )
}
