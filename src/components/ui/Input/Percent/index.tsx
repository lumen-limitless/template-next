import React from 'react'
import { escapeRegExp } from '../../../../functions'
import cn from 'clsx'
const inputRegex = RegExp(`^\\d*$`) // match escaped "." characters via in a non-capturing group

export const Input = React.memo(
  ({
    value,
    onUserInput,
    placeholder,
    className,
    align,
    fontSize = '24px',
    ...rest
  }: {
    value: string | number
    onUserInput: (input: string) => void
    error?: boolean
    fontSize?: string
    align?: 'right' | 'left'
  } & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) => {
    const enforcer = (nextUserInput: string) => {
      if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
        if (Number(nextUserInput) <= 100) {
          onUserInput(nextUserInput)
        }
      }
    }

    return (
      <>
        <input
          value={value}
          onChange={(event) => {
            // replace commas with periods, because uniswap exclusively uses period as the decimal separator
            enforcer(event.target.value.replace(/,/g, '.').replace(/%/g, ''))
          }}
          // universal input options
          inputMode="decimal"
          title="Token Amount"
          autoComplete="off"
          autoCorrect="off"
          // text-specific options
          type="text"
          pattern="^[0-9]*$"
          placeholder={placeholder || '100'}
          maxLength={3}
          className={cn(
            ' relative block w-full rounded-md border-gray-300 bg-transparent shadow-sm  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
            className
          )}
          style={{ fontSize }}
          {...rest}
        />
      </>
    )
  }
)

Input.displayName = 'Percent'

export default Input
