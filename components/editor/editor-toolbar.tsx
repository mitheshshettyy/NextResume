"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, Share2, Save, ChevronDown, FileText, FileCode, Loader2 } from "lucide-react"
import type { ResumeData } from "./resume-editor"

export function EditorToolbar({ resumeData }: { resumeData: ResumeData }) {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" onClick={handleSave} disabled={isSaving}>
        {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
        Save
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            Download PDF
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileCode className="mr-2 h-4 w-4" />
            Download Word
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share2 className="mr-2 h-4 w-4" />
            Share Link
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
