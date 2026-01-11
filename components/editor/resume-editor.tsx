"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { EditorSidebar } from "./editor-sidebar"
import { EditorPreview } from "./editor-preview"
import { EditorToolbar } from "./editor-toolbar"
import { FileText, ArrowLeft, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

export type ResumeData = {
  personalInfo: {
    fullName: string
    email: string
    phone: string
    location: string
    title: string
    summary: string
  }
  experience: Array<{
    id: string
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
  }>
  education: Array<{
    id: string
    school: string
    degree: string
    field: string
    startDate: string
    endDate: string
  }>
  skills: string[]
  template: string
}

const initialData: ResumeData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Software Engineer",
    summary:
      "Experienced software engineer with 8+ years of expertise in building scalable web applications. Passionate about clean code, user experience, and mentoring junior developers.",
  },
  experience: [
    {
      id: "1",
      company: "Tech Company Inc.",
      position: "Senior Software Engineer",
      startDate: "2020-01",
      endDate: "Present",
      description:
        "Led development of microservices architecture, improving system reliability by 40%. Mentored team of 5 junior developers and implemented CI/CD pipelines.",
    },
    {
      id: "2",
      company: "Startup Labs",
      position: "Full Stack Developer",
      startDate: "2017-06",
      endDate: "2019-12",
      description:
        "Built and launched customer-facing dashboard used by 10,000+ users. Implemented real-time features using WebSockets and optimized database queries.",
    },
  ],
  education: [
    {
      id: "1",
      school: "University of California",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2013-09",
      endDate: "2017-05",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
  template: "modern-1",
}

export function ResumeEditor({ resumeId }: { resumeId: string }) {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData)
  const [showPreview, setShowPreview] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("resumeData")
    if (saved) {
      try {
        setResumeData(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse saved resume data", e)
      }
    }
  }, [])

  return (
    <div className="flex h-screen flex-col bg-muted/30">
      <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">NextResume</span>
          </div>
        </div>

        <EditorToolbar resumeData={resumeData} />

        <Button variant="ghost" size="sm" className="gap-2 lg:hidden" onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showPreview ? "Hide" : "Preview"}
        </Button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <EditorSidebar resumeData={resumeData} setResumeData={setResumeData} />
        <div className={cn("flex-1 overflow-auto p-4 lg:p-8", !showPreview && "hidden lg:block")}>
          <EditorPreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  )
}
