import { fetchTimeString } from "@/lib/content"
import { connection } from "next/server"

export async function DynamicComponent() {
  await connection()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const timestamp = await fetchTimeString()
  return <time dateTime={timestamp}>{timestamp}</time>
}
