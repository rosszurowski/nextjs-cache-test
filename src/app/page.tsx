import Image from "next/image"
import nextLogo from "./next.svg"
import { fetchTimeString } from "@/lib/content"

export default async function Home() {
  const timestring = await fetchTimeString()

  console.log("Rendering homepage")

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-md">
        <Image
          className="dark:invert"
          src={nextLogo}
          width={200}
          alt="Next.js logo"
          priority
        />
        <ol className="list-decimal text-sm text-center sm:text-left font-mono">
          <li className="mb-3">
            This is a test of self-hosted Next.js with a CDN and caching. The
            timestamp below should change whenever this page is revalidated.
          </li>
          <li className="mb-3">{timestring}</li>
          <li className="mb-3">
            By default it should be cached and not change between reloads. It
            should also update when a new version is deployed.
          </li>
          <li className="mb-3">
            You can also enable and disable draft mode to see live data.
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
