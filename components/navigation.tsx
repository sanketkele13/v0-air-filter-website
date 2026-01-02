"use client"

import { motion } from "framer-motion"

export default function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div className="text-2xl font-bold text-foreground" whileHover={{ scale: 1.05 }}>
          Filters
        </motion.div>
        <div className="flex gap-8 items-center">
          <a href="#features" className="text-foreground/60 hover:text-foreground transition">
            Features
          </a>
          <a href="#specs" className="text-foreground/60 hover:text-foreground transition">
            Specifications
          </a>
          <motion.button
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
