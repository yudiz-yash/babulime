import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(req) {
    try {
        const { name, email, phone, company, subject, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
        }

        await transporter.sendMail({
            from: `"Babu Lime Website" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,
            replyTo: email,
            subject: `[Contact] ${subject || 'New Enquiry'} — ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #7c3aed, #9333ea); padding: 32px 40px;">
                        <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 700;">New Contact Enquiry</h1>
                        <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">Received via Babu Lime website</p>
                    </div>
                    <div style="padding: 32px 40px; background: #ffffff;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; width: 130px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Name</td>
                                <td style="padding: 10px 0; font-size: 15px; color: #111827; font-weight: 600;">${name}</td>
                            </tr>
                            <tr style="border-top: 1px solid #f3f4f6;">
                                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                                <td style="padding: 10px 0; font-size: 15px; color: #111827;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
                            </tr>
                            <tr style="border-top: 1px solid #f3f4f6;">
                                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                                <td style="padding: 10px 0; font-size: 15px; color: #111827;">${phone || '—'}</td>
                            </tr>
                            <tr style="border-top: 1px solid #f3f4f6;">
                                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
                                <td style="padding: 10px 0; font-size: 15px; color: #111827;">${company || '—'}</td>
                            </tr>
                            <tr style="border-top: 1px solid #f3f4f6;">
                                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                                <td style="padding: 10px 0; font-size: 15px; color: #111827;">${subject || '—'}</td>
                            </tr>
                        </table>
                        <div style="margin-top: 24px; padding: 20px; background: #f9fafb; border-radius: 10px; border-left: 4px solid #7c3aed;">
                            <p style="font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">Message</p>
                            <p style="font-size: 15px; color: #111827; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
                        </div>
                    </div>
                    <div style="padding: 20px 40px; background: #f9fafb; text-align: center; border-top: 1px solid #f3f4f6;">
                        <p style="font-size: 12px; color: #9ca3af; margin: 0;">Babu Lime Pvt Ltd · Rajkot, Gujarat</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact email error:', err);
        return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
    }
}
