import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children }: { children?: any }) {
  return (
    <>
      <Header />
      <main className="h-full min-h-screen w-full">{children}</main>
      <Footer />
    </>
  )
}
