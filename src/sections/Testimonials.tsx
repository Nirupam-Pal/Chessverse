import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, TrendingUp } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'University Student',
    image: '/images/student1.jpg',
    quote: 'ChessVerse transformed my understanding of the game. I went from 1200 to 2000 ELO in just 6 months. The personalized coaching was exactly what I needed.',
    rating: 5,
    improvement: '+800 ELO',
  },
  {
    name: 'James Mitchell',
    role: 'Software Engineer',
    image: '/images/student2.jpg',
    quote: 'The structured curriculum and expert feedback helped me break through my plateau. My tactical vision improved dramatically within weeks.',
    rating: 5,
    improvement: '+450 ELO',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Business Consultant',
    image: '/images/student3.jpg',
    quote: 'I started as a complete beginner and now compete in local tournaments. The coaches here genuinely care about your progress.',
    rating: 5,
    improvement: '+600 ELO',
  },
  {
    name: 'Alex Thompson',
    role: 'High School Student',
    image: '/images/student4.jpg',
    quote: 'The online classes fit perfectly with my school schedule. I have learned more in 3 months here than in 2 years of self-study.',
    rating: 5,
    improvement: '+520 ELO',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="relative w-full bg-twilight section-padding overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-icy/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-icy/10 text-icy text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory mb-4">
            Student <span className="text-gradient">Victories</span>
          </h2>
          <p className="text-ghost text-lg max-w-2xl mx-auto">
            Real results from real students. See how ChessVerse has helped players of all levels achieve their goals.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="liquid-glass rounded-3xl p-6 h-full flex flex-col glow-border transition-all duration-500 group-hover:border-icy/40">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-icy/30 mb-4" />

                {/* Quote Text */}
                <p className="text-ghost text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-icy text-icy" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-icy/30"
                  />
                  <div className="flex-1">
                    <p className="font-display font-semibold text-ivory text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-ghost text-xs">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-icy/10">
                    <TrendingUp className="w-3 h-3 text-icy" />
                    <span className="text-icy text-xs font-semibold">{testimonial.improvement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
