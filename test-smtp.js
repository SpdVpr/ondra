const nodemailer = require('nodemailer');

async function test() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.websupport.cz',
        port: 465,
        secure: true, // true for 465
        auth: {
            user: 'ondrej.macoun@omgraphics.cz',
            pass: '<n?t(mf!trp7f?MY0]yO',
        },
        debug: true, // show debug output
        logger: true // log information in console
    });

    try {
        console.log('Verifying connection...');
        await transporter.verify();
        console.log('Server is ready to take our messages');

        console.log('Sending test email...');
        const info = await transporter.sendMail({
            from: '"Test" <ondrej.macoun@omgraphics.cz>',
            to: 'ondrej.macoun@omgraphics.cz',
            subject: 'Test SMTP Connection',
            text: 'If you see this, SMTP is working.',
        });
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

test();
