import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SignUpForm } from "@/components/auth/sign-up-form"
import { FileText } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="mt-2 text-muted-foreground">Start building your professional resume in minutes</p>
          </div>

          <SignUpForm />

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
