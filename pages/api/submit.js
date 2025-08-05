// pages/api/submit.js
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const submission = req.body;

    // Save to local JSON file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'submissions.json');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      submissions = JSON.parse(fileData || '[]');
    }

    submissions.push(submission);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"Innovate" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: '🚀 New Idea Submission',
      text: `
New Idea Submitted:
Name: ${submission.name}
Email: ${submission.email}
Idea: ${submission.idea}
Stage: ${submission.stage}
Sector: ${submission.sector}
Tech/Non-Tech: ${submission.techType}
Visa: ${submission.visaStatus}
      `
    });

    return res.status(200).json({ message: 'Submission successful' });
  } catch (err) {
    console.error('Submission error:', err);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
}
