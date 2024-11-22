import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  author: {
    name: string
    avatar: string
  }
  comments: {
    id: string
    content: string
    author: string
    date: string
  }[]
}

export function BlogPost({ post }: { post: BlogPost }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{post.title}</CardTitle>
            <p className="text-sm text-gray-500">
              By {post.author.name} • {post.date}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="w-full">
          <h3 className="font-semibold mb-4">Comments</h3>
          {post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium">{comment.author}</p>
                <p className="text-sm text-gray-500">{comment.date}</p>
                <p className="mt-2">{comment.content}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

