import cn from 'clsx'
import React, { FC, forwardRef } from 'react'

export type TypographyWeight = 400 | 500 | 700

const WEIGHTS = {
  400: 'font-medium',
  700: 'font-bold',
}

export type TypographyVariant = 'none' | 'xl' | 'lg' | 'base' | 'sm' | 'xs' | 'xxs'

const VARIANTS = {
  none: '',
  xl: 'text-2xl leading-7 tracking-[-0.01em]',
  lg: 'text-lg leading-6',
  base: 'text-base leading-5',
  sm: 'text-sm leading-5',
  xs: 'text-xs leading-4',
  xxs: 'text-[0.625rem] leading-[1.2]',
}

export interface TypographyProps extends React.AllHTMLAttributes<React.ReactHTML> {
  variant?: TypographyVariant
  weight?: TypographyWeight
  className?: string
  clickable?: boolean
  centered?: boolean
}

const Typography: FC<TypographyProps> = forwardRef(
  (
    {
      variant = 'none',
      weight = 400,
      as = 'p',
      className = '',
      clickable = false,
      centered = false,
      children = [],
      onClick = undefined,
      ...rest
    },
    ref
  ) => {
    return React.createElement(
      as,
      {
        className: cn(
          VARIANTS[variant],
          // @ts-ignore TYPE NEEDS FIXING
          WEIGHTS[weight],
          centered && 'text-center',
          onClick ? 'cursor-pointer select-none' : '',
          className
        ),
        onClick,
        ...rest,
        ref,
      },
      children
    )
  }
)

Typography.displayName = 'Typography'
export default Typography
