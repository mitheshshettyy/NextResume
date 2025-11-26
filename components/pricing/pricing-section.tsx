"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ["1 resume", "5 templates", "Basic AI suggestions", "PDF export", "Email support"],
    cta: "Get Started",
    href: "/sign-up",
    popular: false,
  },
  {
    name: "Pro",
    description: "Best for active job seekers",
    monthlyPrice: 12,
    yearlyPrice: 96,
    features: [
      "Unlimited resumes",
      "All templates",
      "Advanced AI writing",
      "PDF, Word & HTML export",
      "Custom branding",
      "Priority support",
      "Cover letter builder",
    ],
    cta: "Start Pro Trial",
    href: "/sign-up?plan=pro",
    popular: true,
  },
  {
    name: "Team",
    description: "For recruitment teams",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Everything in Pro",
      "5 team members",
      "Team templates",
      "Analytics dashboard",
      "API access",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    href: "#",
    popular: false,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={cn("text-sm", !isYearly && "text-foreground font-medium")}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={cn("text-sm", isYearly && "text-foreground font-medium")}>
              Yearly
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn("relative", plan.popular && "border-primary shadow-lg")}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="px-3 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  {isYearly && plan.yearlyPrice > 0 && (
                    <p className="mt-1 text-sm text-muted-foreground">Billed ${plan.yearlyPrice}/year</p>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
