"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import Features from "@/components/features"
import ProductShowcase from "@/components/product-showcase"
import Specifications from "@/components/specifications"
import Navigation from "@/components/navigation"
import ProductSelector from "@/components/product-selector"
import WaterFilterHero from "@/components/water-filter-hero"
import WaterFilterFeatures from "@/components/water-filter-features"
import WaterFilterShowcase from "@/components/water-filter-showcase"
import WaterFilterSpecs from "@/components/water-filter-specs"

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<"air" | "water">("air")

  return (
    <main className="bg-background overflow-hidden">
      <Navigation />
      <ProductSelector onSelect={setSelectedProduct} />

      {selectedProduct === "air" ? (
        <>
          <Hero />
          <ProductShowcase />
          <Specifications />
          <Features />
        </>
      ) : (
        <>
          <WaterFilterHero />
          <WaterFilterShowcase />
          <WaterFilterSpecs />
          <WaterFilterFeatures />
        </>
      )}
    </main>
  )
}
