import { FC } from 'react'
import cn from 'clsx'
export interface BadgeProps {
  text?: string
}

const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <span
      className={cn(
        'bg-indigo-100 text-indigo-800',
        'ml-3 inline-flex items-center rounded-full  px-3 py-0.5 text-xs font-medium leading-5 '
      )}
    >
      {text}
    </span>
  )
}

export default Badge
