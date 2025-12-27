import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, interest, message } = await request.json();

        // This would normally be stored in environment variables
        const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
        const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
        const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
        const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

        if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
            console.error('Missing Gmail API credentials');
            return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
        }

        const oAuth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIRECT_URI
        );

        oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

        const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

        const subject = `New Inquiry from ${name} - ${interest}`;
        const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
        const emailContent = [
            `From: "My Megam Website" <support@mymegam.com>`,
            `To: support@mymegam.com`,
            `Subject: ${utf8Subject}`,
            `Content-Type: text/html; charset=utf-8`,
            `MIME-Version: 1.0`,
            ``,
            `<h2>New Contact Form Submission</h2>`,
            `<p><strong>Name:</strong> ${name}</p>`,
            `<p><strong>Email:</strong> ${email}</p>`,
            `<p><strong>Interest:</strong> ${interest}</p>`,
            `<p><strong>Message:</strong></p>`,
            `<p>${message.replace(/\n/g, '<br>')}</p>`
        ].join('\n');

        const encodedMessage = Buffer.from(emailContent)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: encodedMessage,
            },
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Gmail API Error:', error);
        return NextResponse.json({
            error: 'Failed to send email',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }, { status: 500 });
    }
}
