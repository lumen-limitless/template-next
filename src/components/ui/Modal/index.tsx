import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import Button from '../Button'
import cn from 'clsx'

interface ModalProps {
  isOpen: boolean
  onDismiss: () => void
  minHeight?: number
  maxHeight?: number
  initialFocusRef?: React.RefObject<any>
  children?: React.ReactNode
  padding?: number
  maxWidth?: number
  className?: string
}

export default function Modal({ isOpen, onDismiss, children }: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          onClose={onDismiss}
          className="fixed inset-0 z-20 overflow-y-hidden backdrop-blur-md"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 backdrop-blur-md" />
          <div className="flex h-screen items-center justify-center px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className={cn('w-full max-w-xl transform transition-all')}>
                <div className="flex h-full w-full flex-col overflow-y-hidden rounded bg-dark-900  p-6 text-white">
                  <div className="absolute top-3 right-3">
                    <Button size="none" onClick={onDismiss}>
                      <XIcon height="20px" />
                    </Button>
                  </div>
                  {children}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
