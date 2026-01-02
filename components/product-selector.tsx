"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ProductSelector({ onSelect }: { onSelect: (product: string) => void }) {
  const [selected, setSelected] = useState<"air" | "water">("air")

  const handleSelect = (product: "air" | "water") => {
    setSelected(product)
    onSelect(product)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex gap-4 justify-center mb-12 pt-20"
    >
      <motion.button
        onClick={() => handleSelect("air")}
        className={`px-8 py-3 rounded-full font-semibold transition ${
          selected === "air" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border border-border"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Air Filter
      </motion.button>
      <motion.button
        onClick={() => handleSelect("water")}
        className={`px-8 py-3 rounded-full font-semibold transition ${
          selected === "water" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border border-border"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Water Filter
      </motion.button>
    </motion.div>
  )
}
