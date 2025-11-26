"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    content:
      "NextResume helped me land my dream job! The AI suggestions were incredibly helpful in articulating my experience.",
    initials: "SC",
  },
  {
    name: "Michael Torres",
    role: "Product Manager",
    content:
      "I've tried many resume builders, but this one is by far the best. The templates are beautiful and ATS-friendly.",
    initials: "MT",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    content:
      "The real-time preview feature is amazing. I could see exactly how my resume would look as I made changes.",
    initials: "ED",
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-t bg-muted/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by job seekers worldwide</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of professionals who have landed their dream jobs with NextResume.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
