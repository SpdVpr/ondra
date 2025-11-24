import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    console.log('API Route called');
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            console.error('Missing required fields');
            return NextResponse.json(
                { message: 'Chybí povinné údaje (jméno, email nebo zpráva).' },
                { status: 400 }
            );
        }

        // Check Env Vars
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('Missing Environment Variables');
            console.error('SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Missing');
            console.error('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Missing');
            console.error('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Missing');
            return NextResponse.json(
                { message: 'Server Configuration Error: Missing Environment Variables' },
                { status: 500 }
            );
        }

        // Debug Password (Safe)
        const pass = process.env.SMTP_PASS;
        console.log('DEBUG: SMTP_PASS length:', pass.length);
        console.log('DEBUG: SMTP_PASS start:', pass.substring(0, 2));
        console.log('DEBUG: SMTP_PASS end:', pass.substring(pass.length - 2));

        console.log('Creating transporter with host:', process.env.SMTP_HOST);

        // Create a transporter using SMTP credentials
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // Force secure for port 465
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            debug: true, // Enable debug logs
            logger: true // Log to console
        });

        console.log('Verifying connection...');
        await transporter.verify();
        console.log('Connection verified');

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
        console.log('Sending email...');
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        return NextResponse.json(
import { NextResponse } from 'next/server';
        import nodemailer from 'nodemailer';

        export async function POST(request) {
            console.log('API Route called');
            try {
                const body = await request.json();
                const { name, email, phone, subject, message } = body;

                // Validate required fields
                if (!name || !email || !message) {
                    console.error('Missing required fields');
                    return NextResponse.json(
                        { message: 'Chybí povinné údaje (jméno, email nebo zpráva).' },
                        { status: 400 }
                    );
                }

                // Check Env Vars
                if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
                    console.error('Missing Environment Variables');
                    console.error('SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Missing');
                    console.error('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Missing');
                    console.error('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Missing');
                    return NextResponse.json(
                        { message: 'Server Configuration Error: Missing Environment Variables' },
                        { status: 500 }
                    );
                }

                // Debug Password (Safe)
                const pass = process.env.SMTP_PASS;
                console.log('DEBUG: SMTP_PASS length:', pass.length);
                console.log('DEBUG: SMTP_PASS start:', pass.substring(0, 2));
                console.log('DEBUG: SMTP_PASS end:', pass.substring(pass.length - 2));

                console.log('Creating transporter with host:', process.env.SMTP_HOST);

                // Create a transporter using SMTP credentials
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: Number(process.env.SMTP_PORT) || 465,
                    secure: true, // Force secure for port 465
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                    debug: true, // Enable debug logs
                    logger: true // Log to console
                });

                console.log('Verifying connection...');
                await transporter.verify();
                console.log('Connection verified');

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
                console.log('Sending email...');
                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully');

                return NextResponse.json(
                    { message: 'Zpráva byla úspěšně odeslána!' },
                    { status: 200 }
                );
            } catch (error) {
                console.error('Error in API route:', error);
                return NextResponse.json(
                    {
                        message: 'Chyba při odesílání zprávy.',
                        error: error.message,
                        debugInfo: {
                            host: process.env.SMTP_HOST,
                            user: process.env.SMTP_USER,
                            passLength: process.env.SMTP_PASS ? process.env.SMTP_PASS.length : 0,
                            passStart: process.env.SMTP_PASS ? process.env.SMTP_PASS.substring(0, 2) : 'N/A',
                            passEnd: process.env.SMTP_PASS ? process.env.SMTP_PASS.substring(process.env.SMTP_PASS.length - 2) : 'N/A',
                        }
                    },
                    { status: 500 }
                );
            }
        }
