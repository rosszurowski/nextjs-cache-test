export async function fetchTimeString(): Promise<string> {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Toronto",
  )
  const data = await res.json()
  return data.datetime
}

export async function fetchTimeStringOrError(): Promise<string> {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Toronto",
  )
  if (Math.random() < 0.3) {
    throw new Error("Random error")
  }
  const data = await res.json()
  return data.datetime
}
