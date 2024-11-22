import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/blog-post'

// This is sample data. In a real application, you'd typically fetch this from a CMS or markdown files.
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'This is the full content of the Next.js blog post. Next.js is a powerful framework for building React applications with server-side rendering and static site generation capabilities. It provides an excellent developer experience with features like automatic code splitting, optimized prefetching, and easy API routes.',
    date: '2023-11-01',
    slug: 'getting-started-with-nextjs',
    author: {
      name: 'Atieh Hamidi',
      avatar: '/placeholder.svg?height=50&width=50'
    },
    comments: []
  },
  {
    id: '2',
    title: 'The Power of React Hooks',
    content: 'React Hooks have revolutionized the way we write React components. They allow us to use state and other React features without writing a class. This post explores popular hooks like useState, useEffect, and useContext, and demonstrates how they can simplify your component logic and make your code more reusable.',
    date: '2023-11-15',
    slug: 'power-of-react-hooks',
    author: {
      name: 'Atieh Hamidi',
      avatar: '/placeholder.svg?height=50&width=50'
    },
    comments: []
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Node.js',
    content: 'Node.js is an excellent choice for building scalable and efficient APIs. This post covers best practices for creating robust backend services, including proper error handling, authentication and authorization, database optimization, and caching strategies. We\'ll also explore popular frameworks like Express and Fastify.',
    date: '2023-12-01',
    slug: 'building-scalable-apis-nodejs',
    author: {
      name: 'Atieh Hamidi',
      avatar: '/placeholder.svg?height=50&width=50'
    },
    comments: []
  }
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Atieh Hamidi's Blog`,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPost post={post} />
    </div>
  )
}

