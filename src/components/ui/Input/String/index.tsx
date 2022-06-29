import cn from 'clsx'
import React from 'react'

export const Input = React.memo(
  ({
    value,
    onUserInput,
    placeholder = 'String',
    className,
    ...rest
  }: {
    value: string
    onUserInput: (input: string) => void
    error?: boolean
    fontSize?: string
  } & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) => {
    return (
      <>
        <input
          value={value}
          onChange={(event) => {
            onUserInput(event.target.value)
          }}
          // universal input options
          inputMode="text"
          title="String"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder={placeholder}
          // text-specific options
          type="text"
          className={cn(
            'relative block w-full rounded-md border-gray-500 bg-transparent shadow-sm hover:border-gray-400 focus:border-ascend-purple focus:ring-ascend-purple sm:text-sm',
            className
          )}
          {...rest}
        />
      </>
    )
  }
)

Input.displayName = 'String'

export default Input
