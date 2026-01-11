"use client"

import type { ResumeData } from "./resume-editor"
import { Mail, Phone, MapPin } from "lucide-react"

export function EditorPreview({ resumeData }: { resumeData: ResumeData }) {
  const formatDate = (date: string) => {
    if (!date || date === "Present") return date
    const [year, month] = date.split("-")
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${monthNames[Number.parseInt(month) - 1]} ${year}`
  }

  return (
    <div className="mx-auto max-w-[850px]">
      <div id="resume-preview" className="aspect-[8.5/11] w-full overflow-hidden rounded-lg border bg-card shadow-lg">
        <div className="h-full w-full p-8 text-[10px] leading-relaxed sm:p-10 sm:text-xs md:p-12 md:text-sm">
          {/* Header */}
          <div className="mb-6 border-b pb-6">
            <h1 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              {resumeData.personalInfo.fullName || "Your Name"}
            </h1>
            <p className="mt-1 text-sm font-medium text-primary sm:text-base">
              {resumeData.personalInfo.title || "Your Title"}
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-muted-foreground sm:gap-4">
              {resumeData.personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  <span>{resumeData.personalInfo.email}</span>
                </div>
              )}
              {resumeData.personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  <span>{resumeData.personalInfo.phone}</span>
                </div>
              )}
              {resumeData.personalInfo.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{resumeData.personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          {resumeData.personalInfo.summary && (
            <div className="mb-6">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary sm:text-base">Summary</h2>
              <p className="text-muted-foreground">{resumeData.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary sm:text-base">
                Experience
              </h2>
              <div className="space-y-4">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{exp.position || "Position"}</h3>
                        <p className="text-muted-foreground">{exp.company || "Company"}</p>
                      </div>
                      <p className="text-right text-muted-foreground">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate) || "Present"}
                      </p>
                    </div>
                    {exp.description && <p className="mt-2 text-muted-foreground">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <div className="mb-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary sm:text-base">
                Education
              </h2>
              <div className="space-y-3">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{edu.school || "School"}</h3>
                      <p className="text-muted-foreground">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </p>
                    </div>
                    <p className="text-right text-muted-foreground">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary sm:text-base">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
