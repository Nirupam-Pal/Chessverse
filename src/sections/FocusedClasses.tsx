import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, UserCheck, Calendar, Award, ChevronRight } from 'lucide-react'

const benefits = [
  {
    icon: UserCheck,
    title: 'Personalized Curriculum',
    description: 'Every lesson is tailored to your specific strengths, weaknesses, and goals.',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book sessions at times that work for you, with 24-hour advance booking.',
  },
  {
    icon: Award,
    title: 'Rapid Improvement',
    description: 'Students see an average 200+ ELO gain within the first 3 months.',
  },
  {
    icon: Star,
    title: 'Elite Coaches Only',
    description: 'All personal coaches hold a minimum FIDE rating of 2400.',
  },
]

export default function FocusedClasses() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative w-full bg-twilight section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-icy/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/coaching.jpg"
                alt="One-on-one chess coaching session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-twilight/80 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 liquid-glass rounded-2xl p-4">
                <p className="text-ghost text-xs mb-1">Average ELO Gain</p>
                <p className="font-display font-bold text-2xl text-icy">+200</p>
                <p className="text-ghost text-xs">in 3 months</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-icy/20 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-violet/20 rounded-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-icy/10 text-icy text-sm font-medium mb-4">
                Personal Coaching
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-ivory mb-4">
                1-on-1 <span className="text-gradient">Masterclass</span>
              </h2>
              <p className="text-ghost text-lg leading-relaxed">
                Experience the ultimate personalized chess education. Our one-on-one sessions provide undivided attention from elite coaches, accelerating your growth like never before.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="liquid-glass rounded-2xl p-5 glow-border"
                >
                  <benefit.icon className="w-6 h-6 text-icy mb-3" />
                  <h4 className="font-display font-semibold text-ivory mb-1 text-sm">
                    {benefit.title}
                  </h4>
                  <p className="text-ghost text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const el = document.querySelector('#booking')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-icy to-violet text-twilight font-semibold text-base hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              Book Your Session
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
