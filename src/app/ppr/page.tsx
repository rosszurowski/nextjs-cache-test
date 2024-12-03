import { DynamicComponent } from "@/app/ppr/dynamic"
import { Suspense } from "react"

export const experimental_ppr = true

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-20">
      <StaticComponent />
      <p className="flex gap-1">
        This is a dynamic component:
        <Suspense fallback={<Fallback />}>
          <DynamicComponent />
        </Suspense>
      </p>
    </div>
  )
}

function StaticComponent() {
  return <p>This is a static component: hello</p>
}

function Fallback() {
  return (
    <span className="inline-block w-[28ch] tabular-nums h-[1.5em] rounded-lg bg-foreground opacity-10" />
  )
}
