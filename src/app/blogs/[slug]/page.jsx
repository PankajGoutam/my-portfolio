import { blogs } from '@/contents/blogs'

export async function generateStaticParams() {
  return blogs.map(blog => ({
    slug: blog.slug
  }))
}

export default function BlogPage({ params }) {
  const blog = blogs.find(b => b.slug === params.slug)

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
      <p className="text-gray-500 mb-2">{blog.date}</p>
    </div>
  )
}
