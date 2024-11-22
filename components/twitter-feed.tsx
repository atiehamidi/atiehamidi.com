import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Twitter } from 'lucide-react'

const tweets = [
  {
    id: '1',
    text: 'Just published a new blog post on Next.js static site generation! Check it out on my website.',
    created_at: '2023-11-22T12:00:00Z'
  },
  {
    id: '2',
    text: 'Excited to be attending the React conference next month! Who else is going?',
    created_at: '2023-11-20T15:30:00Z'
  },
  {
    id: '3',
    text: 'Working on a new open-source project. Can\'t wait to share it with the community!',
    created_at: '2023-11-18T09:45:00Z'
  }
]

export function TwitterFeed() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Twitter className="h-5 w-5" />
            Latest Tweets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tweets.map((tweet) => (
              <Card key={tweet.id} className="p-4">
                <p>{tweet.text}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(tweet.created_at).toLocaleDateString()}
                </p>
              </Card>
            ))}
          </div>
        </CardContent>
      </div>
    </section>
  )
}

