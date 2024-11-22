import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    await resend.emails.send({
      from: "contact@atiehamidi.com",
      to: "hamidiatiye@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

