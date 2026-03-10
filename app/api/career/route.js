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
        const formData = await req.formData();

        const name       = formData.get('name');
        const email      = formData.get('email');
        const phone      = formData.get('phone');
        const position   = formData.get('position');
        const experience = formData.get('experience');
        const coverLetter = formData.get('coverLetter');
        const resumeFile = formData.get('resume');

        if (!name || !email || !position) {
            return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
        }

        // Build attachments array if a resume was uploaded
        const attachments = [];
        if (resumeFile && resumeFile.size > 0) {
            const buffer = Buffer.from(await resumeFile.arrayBuffer());
            attachments.push({
                filename: resumeFile.name,
                content: buffer,
            });
        }

        await transporter.sendMail({
            from: `"Babu Lime Careers" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,
            replyTo: email,
            subject: `[Application] ${position} — ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; border-radius: 12px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #7c3aed, #9333ea); padding: 32px 40px;">
                        <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 700;">New Job Application</h1>
                        <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">Received via Babu Lime Careers</p>
                    </div>
                    <div style="padding: 32px 40px; background: #ffffff;">
                        <div style="display: inline-block; background: #f3eeff; color: #7c3aed; font-size: 13px; font-weight: 700; padding: 6px 16px; border-radius: 100px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.05em;">
                            ${position}
                        </div>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; width: 150px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Full Name</td>
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
                                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Experience</td>
                                <td style="padding: 10px 0; font-size: 15px; color: #111827;">${experience || '—'}</td>
                            </tr>
                            <tr style="border-top: 1px solid #f3f4f6;">
                                <td style="padding: 10px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Resume</td>
                                <td style="padding: 10px 0; font-size: 15px; color: #111827;">${resumeFile?.name || 'Not attached'}</td>
                            </tr>
                        </table>
                        ${coverLetter ? `
                        <div style="margin-top: 24px; padding: 20px; background: #f9fafb; border-radius: 10px; border-left: 4px solid #7c3aed;">
                            <p style="font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">Cover Letter</p>
                            <p style="font-size: 15px; color: #111827; line-height: 1.7; margin: 0;">${coverLetter.replace(/\n/g, '<br/>')}</p>
                        </div>` : ''}
                    </div>
                    <div style="padding: 20px 40px; background: #f9fafb; text-align: center; border-top: 1px solid #f3f4f6;">
                        <p style="font-size: 12px; color: #9ca3af; margin: 0;">Babu Lime Pvt Ltd · Rajkot, Gujarat</p>
                    </div>
                </div>
            `,
            attachments,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Career email error:', err);
        return NextResponse.json({ error: 'Failed to submit application. Please try again.' }, { status: 500 });
    }
}
