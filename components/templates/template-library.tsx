"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, Filter } from "lucide-react"

const categories = ["All", "Professional", "Modern", "Creative", "Simple", "Executive"]

const templates = [
  { id: "harvard-classic", name: "Harvard Classic", category: "Professional", isPremium: false, color: "bg-slate-800" },
  { id: "modern-tech", name: "Tech Minimalist", category: "Modern", isPremium: true, color: "bg-blue-600" },
  { id: "creative-portfolio", name: "Creative Portfolio", category: "Creative", isPremium: true, color: "bg-purple-600" },
  { id: "minimal-swiss", name: "Swiss Minimal", category: "Simple", isPremium: false, color: "bg-zinc-800" },
  { id: "executive-suite", name: "Executive Suite", category: "Professional", isPremium: true, color: "bg-slate-900" },
  { id: "start-up", name: "Startup Founder", category: "Modern", isPremium: false, color: "bg-emerald-600" },
  { id: "art-director", name: "Art Director", category: "Creative", isPremium: true, color: "bg-pink-600" },
  { id: "clean-slate", name: "Clean Slate", category: "Simple", isPremium: false, color: "bg-gray-600" },
  { id: "google-standard", name: "Google Standard", category: "Professional", isPremium: false, color: "bg-blue-500" },
  { id: "data-scientist", name: "Data Scientist", category: "Modern", isPremium: true, color: "bg-cyan-600" },
  { id: "investment-banker", name: "Investment Banker", category: "Executive", isPremium: true, color: "bg-slate-800" },
  { id: "fresher-entry", name: "Fresher Entry", category: "Simple", isPremium: false, color: "bg-indigo-500" },
]

export function TemplateLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Professional Resume Templates</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose from our collection of ATS-friendly templates designed by experts.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-[8.5/11] overflow-hidden bg-muted/50">
                  <div className="absolute inset-0 p-4">
                    <div className="h-full w-full overflow-hidden rounded border bg-card p-3 shadow-sm">
                      {/* Header Mockup */}
                      <div className={`mb-3 flex items-center gap-3 ${template.category === "Creative" ? "flex-col text-center" : ""}`}>
                        <div className={`h-10 w-10 shrink-0 rounded-full ${template.color} opacity-20`} />
                        <div className={`space-y-1.5 ${template.category === "Creative" ? "w-full flex flex-col items-center" : "flex-1"}`}>
                          <div className="h-2.5 w-24 rounded bg-foreground/80" />
                          <div className="h-2 w-16 rounded bg-muted-foreground/40" />
                        </div>
                      </div>

                      {/* Body Mockup */}
                      <div className="space-y-3">
                        {/* Section 1 */}
                        <div className="space-y-1.5">
                          <div className={`h-2 w-12 rounded ${template.color} opacity-30`} />
                          <div className="h-1.5 w-full rounded bg-muted" />
                          <div className="h-1.5 w-full rounded bg-muted" />
                          <div className="h-1.5 w-4/5 rounded bg-muted" />
                        </div>

                        {/* Section 2 */}
                        <div className="space-y-1.5">
                          <div className={`h-2 w-16 rounded ${template.color} opacity-30`} />
                          <div className="h-1.5 w-full rounded bg-muted" />
                          <div className="h-1.5 w-5/6 rounded bg-muted" />
                          <div className="h-1.5 w-4/6 rounded bg-muted" />
                        </div>

                        {/* Section 3 (Small) */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <div className="h-1.5 w-10 rounded bg-muted-foreground/20" />
                            <div className="h-1.5 w-full rounded bg-muted" />
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 w-10 rounded bg-muted-foreground/20" />
                            <div className="h-1.5 w-full rounded bg-muted" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {template.isPremium && (
                    <div className="absolute right-2 top-2">
                      <Badge className="gap-1 bg-primary">
                        <Sparkles className="h-3 w-3" />
                        Pro
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button asChild>
                      <Link href={`/editor/new?template=${template.id}`}>Use Template</Link>
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
