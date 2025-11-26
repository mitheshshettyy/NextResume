import { DashboardNavbar } from "@/components/dashboard/dashboard-navbar"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNavbar />
      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}
