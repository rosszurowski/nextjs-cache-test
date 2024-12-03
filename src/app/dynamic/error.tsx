"use client" // Error boundaries must be Client Components

import { useEffect } from "react"

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col gap-4 p-20">
      <p>
        This page should refresh on every request, but ~30% of the time will
        error:
      </p>
      <p>An error occurred</p>
    </div>
  )
}
