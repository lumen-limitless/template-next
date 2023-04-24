import Image from 'next/image'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only" aria-label="skip">
        skip to main content
      </a>
      <header
        className={
          'sticky top-0 z-20 flex h-16 w-full items-center border-b border-gray-200 px-5 '
        }
      >
        <div className="flex w-full justify-between">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </div>
      </header>
      <main id="main" className="flex h-full w-full flex-grow flex-col">
        {children}
      </main>
      <footer
        id="footer"
        className="flex h-16 items-center border-t border-gray-200 px-5"
      >
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Lumen Limitless. All rights
          reserved.
        </p>
      </footer>
    </>
  )
}
