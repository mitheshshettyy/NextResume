"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Layout, Download, Zap, Shield, Palette } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Writing",
    description:
      "Get intelligent suggestions for your resume content. Our AI helps you articulate your experience professionally.",
  },
  {
    icon: Layout,
    title: "Professional Templates",
    description: "Choose from dozens of ATS-friendly templates designed by HR experts and professional designers.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Download your resume as PDF, Word, or share via a custom link. Perfect formatting every time.",
  },
  {
    icon: Zap,
    title: "Real-Time Preview",
    description: "See changes instantly as you type. What you see is exactly what recruiters will see.",
  },
  {
    icon: Shield,
    title: "ATS Optimized",
    description: "All templates are tested with applicant tracking systems to ensure your resume gets through.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description: "Adjust colors, fonts, spacing, and layout to match your personal brand perfectly.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function FeaturesSection() {
  return (
    <section id="features" className="border-t bg-muted/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to build a great resume</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features to help you create professional resumes that get noticed by recruiters.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full border-0 bg-card/50 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
