import { promises as fs } from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const {
      fullName,
      email,
      idea,
      stage,
      sector,
      techType,
      visaStatus,
    } = await req.json();

    // File path to save submission
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    
    // Read existing submissions
    const fileData = await fs.readFile(filePath, 'utf-8').catch(() => '[]');
    const submissions = JSON.parse(fileData);

    // Add new submission
    const newSubmission = {
      fullName,
      email,
      idea,
      stage,
      sector,
      techType,
      visaStatus,
      submittedAt: new Date().toISOString(),
    };
    submissions.push(newSubmission);

    // Save updated submissions
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Idea Submission from Innovate',
      text: `
New submission received:

Name: ${fullName}
Email: ${email}
Idea: ${idea}
Stage: ${stage}
Sector: ${sector}
Tech Type: ${techType}
Visa Status: ${visaStatus}
Submitted At: ${newSubmission.submittedAt}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Submission successful' }), {
      status: 200,
    });
  } catch (error) {
    console.error('❌ Submission Error:', error);
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
}
