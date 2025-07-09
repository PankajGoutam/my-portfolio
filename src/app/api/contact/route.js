import { NextResponse } from 'next/server'

const ContactRequestBody = {
  name: "",
  email: "",
  message: ""
}

export async function POST(request) {
  try {
    const body = await request.json()

    // Optionally validate fields manually if needed
    // Example:
    // if (!body.name || !body.email || !body.message) {
    //   return NextResponse.json({ message: "All fields are required." }, { status: 400 })
    // }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    )
  }
}
