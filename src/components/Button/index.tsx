import React from 'react'
import { classNames } from '../../functions'

const SIZE = {
  xs: 'p-1 text-xs max-w-xs w-full',
  sm: 'p-2 text-sm max-w-sm w-full',
  default: 'p-3 text-base max-w-md w-full',
  lg: 'p-6 text-lg w-full max-w-lg',
  none: '',
}

const COLORS = {
  default: '',
  blue: 'bg-blue-500 hover:shadow-blue-500/30',
  green: 'bg-green-500 hover:shadow-green-500/30',
  red: 'bg-red-500 hover:shadow-red-500/30',
  yellow: 'bg-yellow-500 hover:shadow-yellow-500/30',
  pink: 'bg-pink-500 hover:shadow-pink-500/30',
  gray: 'bg-gray-500 hover:shadow-gray-500/30',
  gradient: 'bg-gradient-to-r from-pink  to-purple  hover:shadow-pink-500/30',
}

export type ButtonColor =
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
  icon?: JSX.Element
}

export default function Button({
  children,
  className = undefined,
  color = 'default',
  size = 'default',
  icon,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames(
        COLORS[color],
        SIZE[size],
        'inline-flex flex-grow items-center justify-center gap-1 rounded text-white shadow-md transition hover:brightness-110 focus:outline-none disabled:cursor-not-allowed disabled:bg-opacity-20 disabled:text-opacity-60 disabled:shadow-none disabled:hover:brightness-100',
        className
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
}
