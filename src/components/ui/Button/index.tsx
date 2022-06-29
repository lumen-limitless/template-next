import React, { FC } from 'react'
import cn from 'clsx'

const SIZE = {
  xs: 'p-1 text-xs  w-full',
  sm: 'p-2 text-sm  w-full',
  default: 'p-3 text-base w-full',
  lg: 'p-5 text-lg w-full ',
  none: '',
}

const COLORS = {
  transparent: 'border border-dark-900',
  default: '',
  blue: 'bg-blue-500 hover:enabled:shadow-blue/30',
  green: 'bg-green-500 hover:enabled:shadow-green/30',
  red: 'bg-red-500 hover:enabled:shadow-red/30',
  yellow: 'bg-yellow-500 hover:enabled:shadow-yellow/30',
  pink: 'bg-pink-500 hover:enabled:hadow-pink/30',
  gray: 'bg-gray-800 hover:enabled:shadow-gray-800/30',
  gradient: 'bg-gradient-to-r from-pink  to-purple  hover:enabled:shadow-pink/30',
}

export type ButtonColor =
  | 'transparent'
  | 'default'
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'pink'
  | 'gray'
  | 'gradient'

export type ButtonSize = 'xs' | 'sm' | 'lg' | 'default' | 'none'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  size?: ButtonSize
  ref?: React.Ref<HTMLButtonElement>
}
const Button: FC<ButtonProps> = ({
  children,
  className = undefined,
  color = 'default',
  size = 'default',

  ...rest
}) => {
  return (
    <button
      className={cn(
        COLORS[color],
        SIZE[size],
        'inline-flex max-w-sm flex-grow items-center justify-center gap-1 rounded text-white shadow-md transition focus:outline-none hover:enabled:brightness-125 disabled:cursor-not-allowed disabled:bg-opacity-20 disabled:text-opacity-60 disabled:shadow-none ',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
