import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-twilight/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-icy to-violet flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 12l4-4 4 4" />
                <path d="M12 8v8" />
                <path d="M6 20h12" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-ivory tracking-tight group-hover:text-icy transition-colors">
              ChessVerse
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-ghost hover:text-ivory transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-icy group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-ghost hover:text-ivory transition-colors">
              Login
            </button>
            <button
              onClick={() => scrollTo('#booking')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-icy to-violet text-twilight font-semibold text-sm hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-ivory"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[72px] left-0 right-0 bg-twilight/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-base font-medium text-ghost hover:text-ivory transition-colors py-2"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button className="text-left text-base font-medium text-ghost">Login</button>
            <button
              onClick={() => scrollTo('#booking')}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-icy to-violet text-twilight font-semibold text-sm text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
