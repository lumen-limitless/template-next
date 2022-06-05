/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import React from 'react'
interface InputProps
  extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ''> {
  icon?: JSX.Element
  label: string
}
function Input({ className, placeholder, icon, label, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={label} className="block text-xl font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}

        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-gray-300 pl-10 text-black placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  )
}

export default React.memo(Input)
