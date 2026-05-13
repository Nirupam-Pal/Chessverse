import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const footerLinks = {
  Programs: ['Beginner Classes', 'Intermediate', 'Advanced', '1-on-1 Coaching', 'Group Sessions'],
  Company: ['About Us', 'Our Coaches', 'Careers', 'Press', 'Blog'],
  Support: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'FAQ'],
}

export default function Footer() {
  const [email, setEmail] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative w-full bg-void border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-icy to-violet flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12l4-4 4 4" />
                  <path d="M12 8v8" />
                  <path d="M6 20h12" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-ivory">ChessVerse</span>
            </div>
            <p className="text-ghost text-sm leading-relaxed mb-6">
              Elevating chess education worldwide. Join thousands of students on their journey to mastery.
            </p>
            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-ivory text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-ivory text-sm placeholder:text-ghost/50 focus:border-icy focus:outline-none transition-colors"
                />
                <button className="px-4 py-2 rounded-lg bg-icy/20 text-icy text-sm font-medium hover:bg-icy/30 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-ivory mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-ghost text-sm hover:text-icy transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ghost text-xs">
            &copy; 2025 ChessVerse. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-ghost hover:text-icy hover:border-icy/50 transition-all duration-300"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
