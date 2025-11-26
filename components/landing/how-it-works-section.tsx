"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Choose a template",
    description: "Browse our collection of professionally designed templates and pick one that matches your style.",
  },
  {
    step: "02",
    title: "Fill in your details",
    description: "Add your experience, education, and skills. Our AI will help you write compelling descriptions.",
  },
  {
    step: "03",
    title: "Customize & export",
    description: "Fine-tune the design, preview your resume, and download it in your preferred format.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-muted-foreground">Create your professional resume in three simple steps.</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-px w-full bg-border md:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-3xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
