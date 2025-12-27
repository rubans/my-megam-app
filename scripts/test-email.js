/**
 * Test script for My Megam Email API
 * This script sends a test POST request to the local development server's email endpoint.
 * 
 * Usage: node scripts/test-email.js
 */

async function testEmail() {
    const url = 'http://localhost:3000/api/send-email';
    const payload = {
        name: 'Test Runner',
        email: 'test@example.com',
        interest: 'ai-solutions',
        message: 'This is a test message sent from the standalone test script.'
    };

    console.log(`Sending test request to ${url}...`);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('✅ Success:', data.message);
        } else {
            console.error('❌ Error:', data.error);
            if (data.details) console.error('   Details:', data.details);
            if (data.stack) console.error('   Stack:', data.stack);
        }
    } catch (error) {
        console.error('❌ Network Error:', error.message);
        console.log('\nTip: Make sure your development server (npm run dev) is running at http://localhost:3000');
    }
}

testEmail();
