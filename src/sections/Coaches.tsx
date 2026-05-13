import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Star, Trophy, Users } from 'lucide-react'

const coaches = [
  {
    name: 'Alexander Petrov',
    title: 'Grandmaster',
    rating: 'GM 2680',
    image: '/images/coach1.jpg',
    specialization: 'Opening Theory',
    achievements: ['World Championship Finalist 2022', '3x National Champion', 'FIDE Senior Trainer'],
    students: '2,400+',
    ratingStars: 5,
  },
  {
    name: 'Elena Vasquez',
    title: 'International Master',
    rating: 'IM 2450',
    image: '/images/coach2.jpg',
    specialization: 'Tactical Training',
    achievements: ['Women\'s Olympiad Gold', 'Youth World Champion', 'Best Coach Award 2023'],
    students: '1,800+',
    ratingStars: 5,
  },
  {
    name: 'Michael Chen',
    title: 'Grandmaster',
    rating: 'GM 2720',
    image: '/images/coach3.jpg',
    specialization: 'Endgame Mastery',
    achievements: ['Olympiad Gold Medalist', 'Grandmaster since 2005', 'Published Author'],
    students: '3,100+',
    ratingStars: 5,
  },
  {
    name: 'David Kim',
    title: 'International Master',
    rating: 'IM 2520',
    image: '/images/coach4.jpg',
    specialization: 'Strategic Planning',
    achievements: ['Rapid Champion 2024', 'Chess.com Top Coach', 'Streamed 1000+ Lessons'],
    students: '1,500+',
    ratingStars: 5,
  },
]

function CoachCard({ coach, index }: { coach: typeof coaches[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="liquid-glass rounded-3xl overflow-hidden glow-border transition-all duration-500 group-hover:border-icy/40">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={coach.image}
            alt={coach.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-twilight via-twilight/40 to-transparent" />
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-icy/20 backdrop-blur-sm">
            <span className="text-icy text-xs font-semibold">{coach.rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-display font-bold text-xl text-ivory mb-1">
              {coach.name}
            </h3>
            <p className="text-icy text-sm font-medium">{coach.title}</p>
          </div>

          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-violet" />
            <span className="text-ghost text-sm">{coach.specialization}</span>
          </div>

          {/* Achievements */}
          <ul className="space-y-1.5">
            {coach.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-ghost">
                <Trophy className="w-3 h-3 text-icy mt-0.5 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-ghost" />
              <span className="text-sm text-ghost">{coach.students} students</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: coach.ratingStars }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-icy text-icy" />
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-icy/20 to-violet/20 text-icy font-semibold text-sm hover:from-icy/30 hover:to-violet/30 transition-all duration-300">
            Book a Session
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Coaches() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' })

  return (
    <section id="coaches" className="relative w-full bg-void section-padding">
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
            Expert Instructors
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory mb-4">
            Meet Our <span className="text-gradient">Coaches</span>
          </h2>
          <p className="text-ghost text-lg max-w-2xl mx-auto">
            Learn from the best. Our coaches are grandmasters, international masters, and proven educators dedicated to your success.
          </p>
        </motion.div>

        {/* Coaches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {coaches.map((coach, index) => (
            <CoachCard key={coach.name} coach={coach} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
