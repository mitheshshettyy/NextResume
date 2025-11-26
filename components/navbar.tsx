"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight">NextResume</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/templates"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Templates
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "absolute left-0 right-0 top-16 border-b bg-background md:hidden",
          mobileMenuOpen ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-4 p-4">
          <Link href="/templates" className="text-sm font-medium">
            Templates
          </Link>
          <Link href="/pricing" className="text-sm font-medium">
            Pricing
          </Link>
          <Link href="#features" className="text-sm font-medium">
            Features
          </Link>
          <hr className="my-2" />
          <Button variant="ghost" asChild className="justify-start">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
