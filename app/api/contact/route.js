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

        // Check Env Vars
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('Missing Environment Variables');
            return NextResponse.json(
                { message: 'Server Configuration Error: Missing Environment Variables' },
                { status: 500 }
            );
        }

        // Create a transporter using SMTP credentials
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587, // Try 587 (STARTTLS)
            secure: false, // false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL_TO,
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
        console.error('Error in API route:', error);
        return NextResponse.json(
            {
                message: 'Chyba při odesílání zprávy.',
                error: error.message
            },
            { status: 500 }
        );
    }
}
