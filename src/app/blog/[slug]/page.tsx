import { notFound } from "next/navigation"

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((bp) => ({ slug: bp.slug }))
}

export default async function BlogPost({ params }: PageProps) {
  const p = await params
  const post = blogPosts.find((bp) => bp.slug === p.slug)
  if (!post) {
    return notFound()
  }

  return (
    <div className="p-20">
      <h1>{post.title}</h1>
      <h2>{post.slug}</h2>
      <p>Generated at: {new Date().toISOString()}</p>
    </div>
  )
}

const blogPosts = [
  {
    id: "22c484a9-6fca-49de-8044-29a14b90b4a8",
    title: "Blog Post A",
    slug: "blog-post-a",
  },
  {
    id: "d1df1289-9c92-46da-baac-101303738beb",
    title: "Blog Post B",
    slug: "blog-post-b",
  },
]
