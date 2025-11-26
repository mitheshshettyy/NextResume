"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, FileText, Download, Eye, MoreHorizontal, Sparkles, TrendingUp, Clock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const resumes = [
  {
    id: "1",
    title: "Software Engineer Resume",
    template: "Modern",
    lastEdited: "2 hours ago",
    status: "complete",
  },
  {
    id: "2",
    title: "Product Manager CV",
    template: "Professional",
    lastEdited: "1 day ago",
    status: "draft",
  },
  {
    id: "3",
    title: "Marketing Specialist",
    template: "Creative",
    lastEdited: "3 days ago",
    status: "complete",
  },
]

const stats = [
  { label: "Total Resumes", value: "5", icon: FileText, change: "+2 this month" },
  { label: "Downloads", value: "23", icon: Download, change: "+8 this week" },
  { label: "AI Suggestions", value: "47", icon: Sparkles, change: "Used" },
]

export function DashboardContent() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground">Here's what's happening with your resumes.</p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <div className="mt-1 flex items-center gap-1 text-xs text-accent">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Resumes</h2>
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard/resumes">View All</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">Create New Resume</h3>
            <p className="mt-1 text-sm text-muted-foreground">Start from scratch or use a template</p>
            <Button asChild className="mt-4">
              <Link href="/editor/new">Get Started</Link>
            </Button>
          </CardContent>
        </Card>

        {resumes.map((resume) => (
          <Card key={resume.id} className="group relative overflow-hidden transition-shadow hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{resume.title}</CardTitle>
                  <p className="mt-1 text-xs text-muted-foreground">Template: {resume.template}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/editor/${resume.id}`}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-[8.5/11] overflow-hidden rounded-lg border bg-muted/50">
                <div className="h-full w-full p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div className="space-y-1">
                      <div className="h-2 w-20 rounded bg-muted" />
                      <div className="h-1.5 w-16 rounded bg-muted" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded bg-muted" />
                    <div className="h-1.5 w-4/5 rounded bg-muted" />
                    <div className="h-1.5 w-3/4 rounded bg-muted" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant={resume.status === "complete" ? "default" : "secondary"}>
                    {resume.status === "complete" ? "Complete" : "Draft"}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {resume.lastEdited}
                  </span>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
