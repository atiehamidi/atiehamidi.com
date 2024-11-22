import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary">Contact Me</h2>
        <form action="/api/contact" method="POST" className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-background text-foreground border-input"
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-background text-foreground border-input"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full min-h-[150px] bg-background text-foreground border-input"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

