export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only" aria-label="skip">
        skip to main content
      </a>
      <main
        id="main"
        className="relative flex h-full min-h-screen w-full flex-col"
      >
        {children}
      </main>{' '}
    </>
  )
}
