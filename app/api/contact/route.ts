import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New contact form submission from portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from Min Htet Naing(MTN)'s Portfolio Website
    `.trim()

    // For now, we'll simulate sending an email
    // In a real implementation, you would use a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    console.log("[v0] Email would be sent to: kouseruser1227@gmail.com")
    console.log("[v0] Email content:", emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
