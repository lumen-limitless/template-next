export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only" aria-label="skip">
        skip to main content
      </a>
      <header
        className={
          'bg-gray sticky top-0 z-20 h-16 w-full border-b border-gray-200 '
        }
      >
        <div className="flex w-full justify-between">
          <h1> WEB APP</h1>
        </div>
      </header>
      <main id="main" className="flex h-full w-full flex-grow flex-col">
        {children}
      </main>
      <footer id="footer" className="h-16 border-t border-gray-200">
        ;
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Lumen Limitless. All rights
          reserved.
        </p>
      </footer>
    </>
  )
}
