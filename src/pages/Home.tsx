import Navigation from '../sections/Navigation'
import Hero from '../sections/Hero'
import StatsTicker from '../sections/StatsTicker'
import Services from '../sections/Services'
import FocusedClasses from '../sections/FocusedClasses'
import Coaches from '../sections/Coaches'
import Testimonials from '../sections/Testimonials'
import Booking from '../sections/Booking'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main className="relative bg-void min-h-screen">
      <Navigation />
      <Hero />
      <StatsTicker />
      <Services />
      <FocusedClasses />
      <Coaches />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </main>
  )
}
