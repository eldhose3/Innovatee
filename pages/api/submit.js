// /pages/api/submit.js
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const newSubmission = req.body;
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');

    // Save to JSON
    let data = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath);
      data = JSON.parse(fileData);
    }
    data.push(newSubmission);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // Send Email Notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'eldhosejohny100@gmail.com',
        pass: 'qwtr vrxz rlbx uztu'
      }
    });

    const mailOptions = {
      from: 'Innovate <eldhosejohny100@gmail.com>',
      to: 'eldhosejohny100@gmail.com',
      subject: '✅ New Idea Submission',
      text: `
New submission received:

Full Name: ${newSubmission.fullName}
Email: ${newSubmission.email}
Idea: ${newSubmission.idea}
Stage: ${newSubmission.stage}
Sector: ${newSubmission.sector}
Tech/Non-Tech: ${newSubmission.techType}
Visa Status: ${newSubmission.visaStatus}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Submission received and email sent' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
