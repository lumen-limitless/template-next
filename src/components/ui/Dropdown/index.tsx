import React, { Dispatch, FC, Fragment, SetStateAction } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import cn from 'clsx'
import Button, { ButtonProps } from '../Button'

export interface DropdownProps extends ButtonProps {
  options: string[]
  title: string
  onSelect: Dispatch<SetStateAction<any>>
}

const Dropdown: FC<DropdownProps> = ({ options, title, onSelect, color, size, ...props }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button as={Fragment}>
          <Button color={color} size={size}>
            {title}
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-dark-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options &&
            options.map((option, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <a
                    onClick={() => onSelect(option)}
                    className={cn(
                      active
                        ? 'bg-dark-700 bg-opacity-40 text-gray-100'
                        : 'bg-opacity-20 text-gray-300',
                      'block cursor-pointer rounded-md px-6 py-3 text-sm'
                    )}
                  >
                    {option}
                  </a>
                )}
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Dropdown
