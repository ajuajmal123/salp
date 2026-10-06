import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, message } = data;

    // Validate inputs
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // fallback to gmail
      port: Number(process.env.SMTP_PORT || 465),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER || 'no-reply@sapl.in'}>`,
      to: 'tender@sapl.in',
      replyTo: email,
      subject: `Website Inquiry: ${service} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Category: ${service}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1e3a8a;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Category:</strong> ${service}</p>
          <hr />
          <h3>Message Details:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, messageId: info.messageId }, { status: 200 });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
