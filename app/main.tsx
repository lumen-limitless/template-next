export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="flex-grow">
      {children}
    </main>
  )
}
