import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to build your perfect resume?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Join over 100,000 professionals who have created stunning resumes with NextResume. Start for free today.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="gap-2">
            <Link href="/sign-up">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
