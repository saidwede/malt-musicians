import Navbar from './navbar'
import Footer from './footer'

export default function MasterLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}