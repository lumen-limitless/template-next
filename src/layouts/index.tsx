export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only" aria-label="skip">
        skip to main content
      </a>
      <header className={'sticky top-0 z-20'}></header>
      <main id="main" className="flex h-full w-full flex-grow flex-col">
        {children}
      </main>{' '}
      <footer id="footer"></footer>
    </>
  )
}
