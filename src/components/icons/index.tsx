import {AvatarIcon} from './avatar'

const icons = {
  avatar: AvatarIcon
}

export type IconName = keyof typeof icons

export const Icon: React.FC<{name: IconName; className: string}> = ({name, className}) => {
  const Component = icons[name]
  return <Component className={className} />
}
