import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Video, MapPin, User, Check, Award } from 'lucide-react'

const levels = [
  { label: 'Beginner', description: 'New to chess', icon: Award },
  { label: 'Intermediate', description: 'Know the basics', icon: Award },
  { label: 'Advanced', description: 'Competitive player', icon: Award },
]

const classTypes = [
  { label: 'Online Class', icon: Video, description: 'Live via Zoom' },
  { label: 'In-Person', icon: MapPin, description: 'At our academy' },
  { label: '1-on-1 Coaching', icon: User, description: 'Personal session' },
]

const timeSlots = [
  '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM',
  '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM',
]

export default function Booking() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedLevel, setSelectedLevel] = useState('Beginner')
  const [selectedType, setSelectedType] = useState('Online Class')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedLevel && selectedType && selectedTime && selectedDate) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setSelectedLevel('Beginner')
        setSelectedType('Online Class')
        setSelectedTime('')
        setSelectedDate('')
      }, 3000)
    }
  }

  return (
    <section id="booking" className="relative w-full bg-void section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-icy/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-icy/10 text-icy text-sm font-medium mb-4">
            Book a Session
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory mb-4">
            Start Your <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-ghost text-lg max-w-2xl mx-auto">
            Choose your level, class type, and preferred time. Our team will confirm your booking within 24 hours.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="liquid-glass rounded-3xl p-6 sm:p-8 lg:p-10"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-icy/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-icy" />
              </div>
              <h3 className="font-display font-bold text-2xl text-ivory mb-2">Booking Confirmed!</h3>
              <p className="text-ghost">We will send you a confirmation email shortly.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Step 1: Level */}
              <div>
                <label className="flex items-center gap-2 text-ivory font-semibold mb-4">
                  <Award className="w-5 h-5 text-icy" />
                  1. Select Your Level
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {levels.map((level) => (
                    <button
                      key={level.label}
                      onClick={() => setSelectedLevel(level.label)}
                      className={`relative p-4 rounded-xl border transition-all duration-300 text-left ${
                        selectedLevel === level.label
                          ? 'border-icy bg-icy/10 shadow-glow'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <level.icon className={`w-5 h-5 mb-2 ${selectedLevel === level.label ? 'text-icy' : 'text-ghost'}`} />
                      <p className={`font-semibold text-sm ${selectedLevel === level.label ? 'text-ivory' : 'text-ghost'}`}>
                        {level.label}
                      </p>
                      <p className="text-xs text-ghost/70 mt-1">{level.description}</p>
                      {selectedLevel === level.label && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-icy flex items-center justify-center">
                          <Check className="w-3 h-3 text-twilight" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Class Type */}
              <div>
                <label className="flex items-center gap-2 text-ivory font-semibold mb-4">
                  <Video className="w-5 h-5 text-icy" />
                  2. Choose Class Type
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {classTypes.map((type) => (
                    <button
                      key={type.label}
                      onClick={() => setSelectedType(type.label)}
                      className={`relative p-4 rounded-xl border transition-all duration-300 text-left ${
                        selectedType === type.label
                          ? 'border-icy bg-icy/10 shadow-glow'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <type.icon className={`w-5 h-5 mb-2 ${selectedType === type.label ? 'text-icy' : 'text-ghost'}`} />
                      <p className={`font-semibold text-sm ${selectedType === type.label ? 'text-ivory' : 'text-ghost'}`}>
                        {type.label}
                      </p>
                      <p className="text-xs text-ghost/70 mt-1">{type.description}</p>
                      {selectedType === type.label && (
                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-icy flex items-center justify-center">
                          <Check className="w-3 h-3 text-twilight" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Date & Time */}
              <div>
                <label className="flex items-center gap-2 text-ivory font-semibold mb-4">
                  <Calendar className="w-5 h-5 text-icy" />
                  3. Pick Date & Time
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-ghost mb-2">Select Date</p>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ivory text-sm focus:border-icy focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-ghost mb-2">Select Time</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[140px] overflow-y-auto scrollbar-hide">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-icy text-twilight'
                              : 'bg-white/5 text-ghost hover:bg-white/10'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!selectedDate || !selectedTime}
                className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                  selectedDate && selectedTime
                    ? 'bg-gradient-to-r from-icy to-violet text-twilight hover:shadow-glow-lg hover:scale-[1.02]'
                    : 'bg-white/10 text-ghost cursor-not-allowed'
                }`}
              >
                {selectedDate && selectedTime ? 'Confirm Booking' : 'Please select date and time'}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
