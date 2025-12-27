const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    logger: true, // Logs the SMTP traffic to terminal
    debug: true,  // Shows detailed error messages
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_EMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
});

async function runTest() {
    console.log("🚀 Starting email test...");
    try {
        await transporter.sendMail({
            from: process.env.GMAIL_EMAIL_USER,
            to: "support@mymegam.com", // Send to yourself for testing
            subject: "Terminal Test Email",
            text: "If you are reading this, your OAuth2 setup works!",
        });
        console.log("✅ SUCCESS: Email sent!");
    } catch (error) {
        console.error("❌ FAILED:", error.message);
    }
}

runTest();