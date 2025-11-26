import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TemplateLibrary } from "@/components/templates/template-library"

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <TemplateLibrary />
      </main>
      <Footer />
    </div>
  )
}
