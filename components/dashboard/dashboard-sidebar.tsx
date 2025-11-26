"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, FolderOpen, CreditCard, Settings, HelpCircle } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Resumes", href: "/dashboard/resumes", icon: FileText },
  { name: "Templates", href: "/templates", icon: FolderOpen },
  { name: "Pricing", href: "/pricing", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "#", icon: HelpCircle },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-muted/30 lg:block">
      <nav className="flex flex-col gap-1 p-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mx-4 mt-auto border-t pt-4">
        <div className="rounded-lg bg-primary/5 p-4">
          <h4 className="text-sm font-semibold">Upgrade to Pro</h4>
          <p className="mt-1 text-xs text-muted-foreground">
            Get unlimited resumes, premium templates, and AI features.
          </p>
          <Link href="/pricing" className="mt-3 inline-block text-xs font-medium text-primary hover:underline">
            Learn more →
          </Link>
        </div>
      </div>
    </aside>
  )
}
