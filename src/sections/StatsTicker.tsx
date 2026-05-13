import { Users, Trophy, Clock, BookOpen, Target, Crown } from 'lucide-react'

const stats = [
  { label: '+1500 Students', icon: Users },
  { label: 'World-class Coaches', icon: Crown },
  { label: '24/7 Availability', icon: Clock },
  { label: 'Proven Methods', icon: BookOpen },
  { label: 'Tournament Ready', icon: Trophy },
  { label: 'ELO Mastery', icon: Target },
]

export default function StatsTicker() {
  const doubledStats = [...stats, ...stats]

  return (
    <section className="relative w-full bg-void py-6 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubledStats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-3 mx-8 md:mx-12"
          >
            <stat.icon className="w-5 h-5 text-icy flex-shrink-0" />
            <span className="font-display font-bold text-lg md:text-xl text-icy tracking-wide">
              {stat.label}
            </span>
            <span className="text-violet/50 text-2xl">&#9670;</span>
          </div>
        ))}
      </div>
    </section>
  )
}
