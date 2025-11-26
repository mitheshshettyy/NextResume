"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="gap-2 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>AI-Powered Resume Builder</span>
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Build your <span className="text-primary">perfect resume</span> in minutes
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground text-pretty">
              Let AI help you craft a professional resume that stands out. Choose from beautiful templates, get
              intelligent suggestions, and land your dream job faster.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="gap-2">
                <Link href="/sign-up">
                  Start Building Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/templates">Browse Templates</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>ATS-friendly templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Export to PDF</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
              <div className="p-6">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10" />
                  <div className="space-y-2">
                    <div className="h-4 w-32 rounded bg-foreground/20" />
                    <div className="h-3 w-24 rounded bg-muted-foreground/20" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-3 w-20 rounded bg-primary/40" />
                    <div className="h-2 w-full rounded bg-muted" />
                    <div className="h-2 w-4/5 rounded bg-muted" />
                    <div className="h-2 w-3/4 rounded bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-24 rounded bg-primary/40" />
                    <div className="h-2 w-full rounded bg-muted" />
                    <div className="h-2 w-5/6 rounded bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-16 rounded bg-primary/40" />
                    <div className="flex flex-wrap gap-2">
                      <div className="h-6 w-16 rounded-full bg-secondary" />
                      <div className="h-6 w-20 rounded-full bg-secondary" />
                      <div className="h-6 w-14 rounded-full bg-secondary" />
                      <div className="h-6 w-18 rounded-full bg-secondary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-1/3 rounded-lg border bg-card p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium">AI Suggestion</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
