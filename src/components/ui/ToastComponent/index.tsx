import { Transition } from '@headlessui/react'
import { CheckCircleIcon, InformationCircleIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import toast, { ErrorIcon, Toast } from 'react-hot-toast'
import cn from 'clsx'

interface ToastComponentProps {
  t: Toast
  type: string
  message: string
}
const ToastComponent: React.FC<ToastComponentProps> = ({ t, type, message }) => {
  return (
    <Transition
      show={t.visible}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={cn(
          'pointer-events-auto w-full max-w-xs overflow-hidden rounded-lg  border-l  bg-dark-800 shadow-lg ring-1 ring-black ring-opacity-5',
          type === 'success'
            ? 'border-green-500'
            : type === 'info'
            ? 'border-blue-500'
            : type === 'error'
            ? 'border-red-500'
            : null
        )}
      >
        <div className="p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {type === 'success' ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
              ) : type === 'error' ? (
                <ErrorIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
              ) : type === 'info' ? (
                <InformationCircleIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
              ) : null}
            </div>
            <div className="ml-3 w-0 flex-1 ">
              <p className="text-sm text-white">{message}</p>
            </div>
            <div className="ml-4 flex flex-shrink-0">
              <button
                className="inline-flex rounded-md text-gray-400 hover:text-gray-500 "
                onClick={() => toast.dismiss(t.id)}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default ToastComponent
