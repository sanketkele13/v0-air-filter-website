"use client"

import { motion } from "framer-motion"

const specs = [
  {
    icon: "💨",
    value: "100 m³/h",
    label: "PM CADR",
    description: "Particle filtration capacity",
  },
  {
    icon: "🔬",
    value: "50 m³/h",
    label: "TVOC CADR",
    description: "Volatile organic compounds",
  },
  {
    icon: "🦠",
    value: "99.97%",
    label: "Mould Filtration",
    description: "Microorganism removal",
  },
  {
    icon: "📊",
    value: "PM2.5",
    label: "Real-time",
    description: "Digital monitoring",
  },
  {
    icon: "🏠",
    value: "8-15 m²",
    label: "Coverage",
    description: "Applicable area",
  },
  {
    icon: "🌀",
    value: "360°",
    label: "Air Circulation",
    description: "Complete coverage inlet",
  },
]

export default function Specifications() {
  return (
    <section id="specs" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Advanced Specifications</h2>
          <p className="text-lg text-foreground/60">Industry-leading performance metrics</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-muted/50 border border-border rounded-xl p-6 hover:border-primary/50 transition"
            >
              <motion.div className="text-4xl mb-4" whileHover={{ scale: 1.2, rotate: 10 }}>
                {spec.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{spec.value}</h3>
              <p className="text-sm font-semibold text-primary mb-2">{spec.label}</p>
              <p className="text-foreground/60 text-sm">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
