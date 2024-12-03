import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const searchParams = new URL(req.url).searchParams
  const path = searchParams.get("path")
  if (!path) {
    return NextResponse.json(
      { error: "Missing 'path' query parameter" },
      { status: 400 },
    )
  }
  revalidatePath(path)
  return NextResponse.json({ status: "ok" })
}
