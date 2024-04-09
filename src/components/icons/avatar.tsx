import {cn} from '@/utils/cn'

export const AvatarIcon: React.FC<{className?: string}> = ({className}) => {
  return (
    <svg viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn('fill-current', className)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14.7154V24.9676L23.3271 29.7871L26 26.7417V5.95373L10.1493 2.26476L2 14.7154ZM9.24138 0L0 14.119V26.566L24.046 32L28 27.4949V4.36575L9.24138 0Z"
      />
    </svg>
  )
}
