"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { User, Briefcase, GraduationCap, Lightbulb, Sparkles, Plus, Trash2, Loader2, Layout } from "lucide-react"
import type { ResumeData } from "./resume-editor"
import { cn } from "@/lib/utils"

type EditorSidebarProps = {
  resumeData: ResumeData
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>
}

const templates = [
  { id: "modern-1", name: "Modern Pro" },
  { id: "professional-1", name: "Executive Suite" },
  { id: "creative-1", name: "Creative Edge" },
  { id: "simple-1", name: "Clean Slate" },
]

export function EditorSidebar({ resumeData, setResumeData }: EditorSidebarProps) {
  const [isGenerating, setIsGenerating] = useState<string | null>(null)

  const handleAIGenerate = async (field: string) => {
    setIsGenerating(field)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (field === "summary") {
      setResumeData((prev) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          summary:
            "Results-driven software engineer with 8+ years of experience building scalable web applications and leading high-performing teams. Expert in modern JavaScript frameworks, cloud architecture, and agile methodologies. Proven track record of delivering projects that increase efficiency by 40% and improve user engagement.",
        },
      }))
    }
    setIsGenerating(null)
  }

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now().toString(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }))
  }

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now().toString(),
          school: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
        },
      ],
    }))
  }

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }))
  }

  const addSkill = (skill: string) => {
    if (skill && !resumeData.skills.includes(skill)) {
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }))
    }
  }

  const removeSkill = (skill: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }))
  }

  return (
    <aside className="w-full shrink-0 border-r bg-background lg:w-96">
      <Tabs defaultValue="content" className="flex h-full flex-col">
        <TabsList className="mx-4 mt-4 grid w-auto grid-cols-2">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-4">
              <Accordion type="multiple" defaultValue={["personal", "experience"]} className="space-y-2">
                <AccordionItem value="personal" className="border rounded-lg">
                  <AccordionTrigger className="px-4 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      <span>Personal Info</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input
                          value={resumeData.personalInfo.fullName}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, fullName: e.target.value },
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Job Title</Label>
                        <Input
                          value={resumeData.personalInfo.title}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, title: e.target.value },
                            }))
                          }
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input
                            type="email"
                            value={resumeData.personalInfo.email}
                            onChange={(e) =>
                              setResumeData((prev) => ({
                                ...prev,
                                personalInfo: { ...prev.personalInfo, email: e.target.value },
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Phone</Label>
                          <Input
                            value={resumeData.personalInfo.phone}
                            onChange={(e) =>
                              setResumeData((prev) => ({
                                ...prev,
                                personalInfo: { ...prev.personalInfo, phone: e.target.value },
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Location</Label>
                        <Input
                          value={resumeData.personalInfo.location}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, location: e.target.value },
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>Professional Summary</Label>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 gap-1 text-xs"
                            onClick={() => handleAIGenerate("summary")}
                            disabled={isGenerating === "summary"}
                          >
                            {isGenerating === "summary" ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              <Sparkles className="h-3 w-3 text-primary" />
                            )}
                            AI Generate
                          </Button>
                        </div>
                        <Textarea
                          rows={4}
                          value={resumeData.personalInfo.summary}
                          onChange={(e) =>
                            setResumeData((prev) => ({
                              ...prev,
                              personalInfo: { ...prev.personalInfo, summary: e.target.value },
                            }))
                          }
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="experience" className="border rounded-lg">
                  <AccordionTrigger className="px-4 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>Experience</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      {resumeData.experience.map((exp, index) => (
                        <Card key={exp.id}>
                          <CardHeader className="p-3 pb-0">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-sm">Experience {index + 1}</CardTitle>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-destructive"
                                onClick={() => removeExperience(exp.id)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3 p-3">
                            <div className="space-y-2">
                              <Label className="text-xs">Company</Label>
                              <Input
                                value={exp.company}
                                onChange={(e) =>
                                  setResumeData((prev) => ({
                                    ...prev,
                                    experience: prev.experience.map((ex) =>
                                      ex.id === exp.id ? { ...ex, company: e.target.value } : ex,
                                    ),
                                  }))
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-xs">Position</Label>
                              <Input
                                value={exp.position}
                                onChange={(e) =>
                                  setResumeData((prev) => ({
                                    ...prev,
                                    experience: prev.experience.map((ex) =>
                                      ex.id === exp.id ? { ...ex, position: e.target.value } : ex,
                                    ),
                                  }))
                                }
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-2">
                                <Label className="text-xs">Start Date</Label>
                                <Input
                                  type="month"
                                  value={exp.startDate}
                                  onChange={(e) =>
                                    setResumeData((prev) => ({
                                      ...prev,
                                      experience: prev.experience.map((ex) =>
                                        ex.id === exp.id ? { ...ex, startDate: e.target.value } : ex,
                                      ),
                                    }))
                                  }
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs">End Date</Label>
                                <Input
                                  value={exp.endDate}
                                  placeholder="Present"
                                  onChange={(e) =>
                                    setResumeData((prev) => ({
                                      ...prev,
                                      experience: prev.experience.map((ex) =>
                                        ex.id === exp.id ? { ...ex, endDate: e.target.value } : ex,
                                      ),
                                    }))
                                  }
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label className="text-xs">Description</Label>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 gap-1 text-xs"
                                  onClick={() => handleAIGenerate(`exp-${exp.id}`)}
                                  disabled={isGenerating === `exp-${exp.id}`}
                                >
                                  {isGenerating === `exp-${exp.id}` ? (
                                    <Loader2 className="h-3 w-3 animate-spin" />
                                  ) : (
                                    <Sparkles className="h-3 w-3 text-primary" />
                                  )}
                                  Enhance
                                </Button>
                              </div>
                              <Textarea
                                rows={3}
                                value={exp.description}
                                onChange={(e) =>
                                  setResumeData((prev) => ({
                                    ...prev,
                                    experience: prev.experience.map((ex) =>
                                      ex.id === exp.id ? { ...ex, description: e.target.value } : ex,
                                    ),
                                  }))
                                }
                              />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <Button variant="outline" className="w-full gap-2 bg-transparent" onClick={addExperience}>
                        <Plus className="h-4 w-4" />
                        Add Experience
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="education" className="border rounded-lg">
                  <AccordionTrigger className="px-4 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>Education</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      {resumeData.education.map((edu, index) => (
                        <Card key={edu.id}>
                          <CardHeader className="p-3 pb-0">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-sm">Education {index + 1}</CardTitle>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-destructive"
                                onClick={() => removeEducation(edu.id)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3 p-3">
                            <div className="space-y-2">
                              <Label className="text-xs">School</Label>
                              <Input
                                value={edu.school}
                                onChange={(e) =>
                                  setResumeData((prev) => ({
                                    ...prev,
                                    education: prev.education.map((ed) =>
                                      ed.id === edu.id ? { ...ed, school: e.target.value } : ed,
                                    ),
                                  }))
                                }
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-2">
                                <Label className="text-xs">Degree</Label>
                                <Input
                                  value={edu.degree}
                                  onChange={(e) =>
                                    setResumeData((prev) => ({
                                      ...prev,
                                      education: prev.education.map((ed) =>
                                        ed.id === edu.id ? { ...ed, degree: e.target.value } : ed,
                                      ),
                                    }))
                                  }
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs">Field</Label>
                                <Input
                                  value={edu.field}
                                  onChange={(e) =>
                                    setResumeData((prev) => ({
                                      ...prev,
                                      education: prev.education.map((ed) =>
                                        ed.id === edu.id ? { ...ed, field: e.target.value } : ed,
                                      ),
                                    }))
                                  }
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-2">
                                <Label className="text-xs">Start Date</Label>
                                <Input
                                  type="month"
                                  value={edu.startDate}
                                  onChange={(e) =>
                                    setResumeData((prev) => ({
                                      ...prev,
                                      education: prev.education.map((ed) =>
                                        ed.id === edu.id ? { ...ed, startDate: e.target.value } : ed,
                                      ),
                                    }))
                                  }
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs">End Date</Label>
                                <Input
                                  type="month"
                                  value={edu.endDate}
                                  onChange={(e) =>
                                    setResumeData((prev) => ({
                                      ...prev,
                                      education: prev.education.map((ed) =>
                                        ed.id === edu.id ? { ...ed, endDate: e.target.value } : ed,
                                      ),
                                    }))
                                  }
                                />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <Button variant="outline" className="w-full gap-2 bg-transparent" onClick={addEducation}>
                        <Plus className="h-4 w-4" />
                        Add Education
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="skills" className="border rounded-lg">
                  <AccordionTrigger className="px-4 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span>Skills</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="cursor-pointer gap-1 pr-1"
                            onClick={() => removeSkill(skill)}
                          >
                            {skill}
                            <span className="ml-1 text-muted-foreground hover:text-destructive">×</span>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a skill..."
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              addSkill(e.currentTarget.value)
                              e.currentTarget.value = ""
                            }
                          }}
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={(e) => {
                            const input = e.currentTarget.previousElementSibling as HTMLInputElement
                            addSkill(input.value)
                            input.value = ""
                          }}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="templates" className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="grid grid-cols-2 gap-3 p-4">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setResumeData((prev) => ({ ...prev, template: template.id }))}
                  className={cn(
                    "rounded-lg border p-2 text-left transition-all hover:border-primary/50",
                    resumeData.template === template.id && "border-primary ring-2 ring-primary/20",
                  )}
                >
                  <div className="aspect-[8.5/11] overflow-hidden rounded bg-muted/50">
                    <div className="flex h-full items-center justify-center">
                      <Layout className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="mt-2 text-center text-xs font-medium">{template.name}</p>
                </button>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </aside>
  )
}
