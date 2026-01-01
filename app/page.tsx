"use client"

import Hero from "@/components/hero"
import Features from "@/components/features"
import ProductShowcase from "@/components/product-showcase"
import Specifications from "@/components/specifications"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="bg-background overflow-hidden">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <Specifications />
      <Features />
    </main>
  )
}
