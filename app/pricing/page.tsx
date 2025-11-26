import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing/pricing-section"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
