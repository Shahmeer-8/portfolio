import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f0f14;color:#e2e8f0;border-radius:12px;overflow:hidden">
          <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px 40px">
            <h1 style="margin:0;font-size:22px;font-weight:800;color:#fff">New Contact Message</h1>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75)">Via your portfolio contact form</p>
          </div>
          <div style="padding:36px 40px;background:#0f0f14">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);width:90px;color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Name</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#e2e8f0;font-size:14px;font-weight:500">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07)"><a href="mailto:${email}" style="color:#818cf8;font-size:14px;font-weight:500;text-decoration:none">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Subject</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:#e2e8f0;font-size:14px;font-weight:500">${subject}</td>
              </tr>
              <tr>
                <td style="padding:16px 0 0;color:#94a3b8;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top">Message</td>
                <td style="padding:16px 0 0;color:#e2e8f0;font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</td>
              </tr>
            </table>
          </div>
          <div style="padding:20px 40px;background:#0a0a0f;border-top:1px solid rgba(255,255,255,0.05);font-size:11px;color:#475569">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
