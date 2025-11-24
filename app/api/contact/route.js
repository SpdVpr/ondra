import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Chybí povinné údaje (jméno, email nebo zpráva).' },
                { status: 400 }
            );
        }

        // Create a transporter using SMTP credentials
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (must be authenticated user usually)
            to: process.env.CONTACT_EMAIL_TO, // Receiver address
            replyTo: email,
            subject: subject || `Nová zpráva z kontaktního formuláře od ${name}`,
            text: `
        Jméno: ${name}
        Email: ${email}
        Telefon: ${phone || 'Neuvedeno'}
        Předmět: ${subject || 'Bez předmětu'}
        
        Zpráva:
        ${message}
      `,
            html: `
        <h3>Nová zpráva z webu</h3>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
        <p><strong>Předmět:</strong> ${subject || 'Bez předmětu'}</p>
        <br>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Zpráva byla úspěšně odeslána!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Chyba při odesílání zprávy.', error: error.message },
            { status: 500 }
        );
    }
}
