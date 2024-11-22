import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build fast and SEO-friendly websites with Next.js',
    date: '2023-11-01',
    slug: 'getting-started-with-nextjs'
  },
  {
    id: '2',
    title: 'The Power of React Hooks',
    excerpt: 'Explore how React Hooks can simplify your component logic',
    date: '2023-11-15',
    slug: 'power-of-react-hooks'
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Best practices for creating robust and scalable backend services',
    date: '2023-12-01',
    slug: 'building-scalable-apis-nodejs'
  }
]

export function Blog() {
  return (
    <section id="blog" className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

