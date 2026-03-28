import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your project is ready. Start building something amazing.
        </p>
      </div>
    </div>
  )
}
