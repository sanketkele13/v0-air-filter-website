"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const waterProductImages = [
  {
    src: "/images/water-filter-tap.png",
    title: "Tap Filter",
    description: "Mounted shower & tap filter for hard water filtration",
  },
  {
    src: "/images/water-filter-cartridge.png",
    title: "Filter Cartridge",
    description: "Multi-layer filtration with hard water conditioning",
  },
  {
    src: "/images/water-filter-installation.png",
    title: "Installation",
    description: "Easy DIY installation with universal adapters",
  },
]

export default function WaterFilterShowcase() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Water Filter System</h2>
          <p className="text-lg text-foreground/60">Premium filtration for shower and tap water</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-background rounded-2xl p-8 flex items-center justify-center min-h-96"
          >
            <motion.img
              key={activeImage}
              src={waterProductImages[activeImage].src}
              alt={waterProductImages[activeImage].title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="max-w-sm drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {waterProductImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-full p-4 rounded-lg border-2 transition ${
                  activeImage === index
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  <p className="font-semibold text-foreground">{image.title}</p>
                  <p className="text-sm text-foreground/60">{image.description}</p>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
