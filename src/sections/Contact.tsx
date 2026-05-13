import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: '123 Chess Avenue, New York, NY 10001',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@chessverse.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon - Sat: 8AM - 9PM',
  },
]

const socialLinks = [
  { name: 'Facebook', icon: 'M' },
  { name: 'Twitter', icon: 'T' },
  { name: 'Instagram', icon: 'I' },
  { name: 'YouTube', icon: 'Y' },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }
  }

  return (
    <section id="contact" className="relative w-full bg-twilight section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-icy/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-icy/10 text-icy text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-ghost text-lg max-w-2xl mx-auto">
            Have questions? We would love to hear from you. Reach out and our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="liquid-glass rounded-3xl p-6 sm:p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-icy/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-icy" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ivory mb-2">Message Sent!</h3>
                  <p className="text-ghost">We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-ghost mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory text-sm placeholder:text-ghost/50 focus:border-icy focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-ghost mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory text-sm placeholder:text-ghost/50 focus:border-icy focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-ghost mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your chess goals..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory text-sm placeholder:text-ghost/50 focus:border-icy focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-icy to-violet text-twilight font-semibold text-base hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="liquid-glass rounded-2xl p-5 glow-border"
                >
                  <info.icon className="w-5 h-5 text-icy mb-3" />
                  <p className="text-ghost text-xs mb-1">{info.label}</p>
                  <p className="text-ivory text-sm font-medium">{info.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-[250px] liquid-glass">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ChessVerse Location"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-ghost text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-ghost hover:text-icy hover:border-icy/50 transition-all duration-300"
                  title={social.name}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
