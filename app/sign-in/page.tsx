import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SignInForm } from "@/components/auth/sign-in-form"
import { FileText } from "lucide-react"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to your account to continue building your resume</p>
          </div>

          <SignInForm />

          <p className="text-center text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link href="/sign-up" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
