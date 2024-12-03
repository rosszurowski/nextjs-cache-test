import { fetchTimeStringOrError } from "@/lib/content"

export const dynamic = "force-dynamic"

export default async function DynamicPage() {
  return (
    <div className="flex flex-col gap-4 p-20">
      <p>
        This page should refresh on every request, but ~30% of the time will
        error:
      </p>
      <TimeComponent />
    </div>
  )
}

async function TimeComponent() {
  const data = await fetchTimeStringOrError()
  return <time dateTime={data}>{data}</time>
}
