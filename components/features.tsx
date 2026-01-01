"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Smart Filtration",
    description:
      "HEPA and activated carbon filters work together to eliminate 99.97% of particles, allergens, and odors",
    icon: "🔬",
  },
  {
    title: "Real-time Monitoring",
    description: "Live PM2.5 readings on an intuitive digital display with automatic speed adjustment",
    icon: "📊",
  },
  {
    title: "360° Air Intake",
    description: "Innovative circular design ensures complete air circulation from all angles",
    icon: "🌀",
  },
  {
    title: "Whisper Quiet",
    description: "Ultra-low noise operation at just 21dB - quieter than a library",
    icon: "🔇",
  },
  {
    title: "Energy Efficient",
    description: "Eco-friendly design uses 40% less energy than traditional purifiers",
    icon: "⚡",
  },
  {
    title: "Smart Controls",
    description: "Mobile app integration, voice control compatibility, and custom scheduling",
    icon: "📱",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Why Choose This Air Purifier</h2>
          <p className="text-lg text-foreground/60">Premium air quality technology for your home</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition group"
            >
              <motion.div className="text-5xl mb-4" whileHover={{ scale: 1.2, rotate: 12 }}>
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{feature.description}</p>
              <motion.div
                className="mt-4 h-1 bg-primary rounded-full w-0 group-hover:w-12 transition-all duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Air Purifier Today
          </motion.button>
          <p className="mt-4 text-foreground/60">Free shipping on all orders over $100</p>
        </motion.div>
      </div>
    </section>
  )
}
