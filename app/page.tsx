import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { TwitterFeed } from "@/components/twitter-feed"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <TwitterFeed />
      <Contact />
    </main>
  )
}

