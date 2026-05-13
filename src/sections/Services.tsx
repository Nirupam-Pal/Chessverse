import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, ChevronRight, Video, MapPin } from 'lucide-react'

const services = [
  {
    level: 'Beginner',
    title: 'Beginner Fundamentals',
    description: 'Perfect for those new to chess. Learn piece movements, basic rules, and simple strategies in a fun, engaging environment.',
    features: ['Piece movement & rules', 'Basic openings', 'Simple tactics', 'Endgame basics'],
    online: true,
    offline: true,
    color: 'from-icy/20 to-transparent',
    borderColor: 'border-icy/30',
    icon: GraduationCap,
  },
  {
    level: 'Intermediate',
    title: 'Advanced Tactics',
    description: 'For players with basic knowledge. Dive deeper into tactics, strategic planning, and positional play.',
    features: ['Advanced openings', 'Tactical patterns', 'Strategic planning', 'Game analysis'],
    online: true,
    offline: true,
    color: 'from-violet/20 to-transparent',
    borderColor: 'border-violet/30',
    icon: ChevronRight,
  },
  {
    level: 'Advanced',
    title: 'Grandmaster Mentorship',
    description: 'Elite coaching for competitive players. Master complex strategies and prepare for tournaments.',
    features: ['Grandmaster coaching', 'Tournament prep', 'Advanced endgames', 'Psychological training'],
    online: true,
    offline: true,
    color: 'from-icy/20 via-violet/10 to-transparent',
    borderColor: 'border-icy/30',
    icon: GraduationCap,
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-3xl p-1 overflow-hidden transition-all duration-500 ${
        isHovered ? 'scale-[1.02]' : ''
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
      <div className="relative liquid-glass rounded-[22px] p-8 h-full flex flex-col glow-border">
        {/* Level Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            service.level === 'Beginner' ? 'bg-icy/20 text-icy' :
            service.level === 'Intermediate' ? 'bg-violet/20 text-violet' :
            'bg-gradient-to-r from-icy/20 to-violet/20 text-icy'
          }`}>
            {service.level}
          </span>
          <div className="flex items-center gap-2">
            {service.online && (
              <span className="flex items-center gap-1 text-xs text-ghost">
                <Video className="w-3 h-3" /> Online
              </span>
            )}
            {service.offline && (
              <span className="flex items-center gap-1 text-xs text-ghost">
                <MapPin className="w-3 h-3" /> Offline
              </span>
            )}
          </div>
        </div>

        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-icy/20 to-violet/20 flex items-center justify-center mb-6 group-hover:from-icy/30 group-hover:to-violet/30 transition-all duration-300">
          <service.icon className="w-7 h-7 text-icy" />
        </div>

        {/* Content */}
        <h3 className="font-display font-bold text-2xl text-ivory mb-3">
          {service.title}
        </h3>
        <p className="text-ghost text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-ghost">
              <span className="w-1.5 h-1.5 rounded-full bg-icy flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-icy/20 to-violet/20 text-icy font-semibold text-sm hover:from-icy/30 hover:to-violet/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
          Enroll Now
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="services" className="relative w-full bg-void section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-icy/10 text-icy text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory mb-4">
            Choose Your <span className="text-gradient">Path</span>
          </h2>
          <p className="text-ghost text-lg max-w-2xl mx-auto">
            From your first move to grandmaster level, we have the perfect program to elevate your game. Available both online and in-person.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.level} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
