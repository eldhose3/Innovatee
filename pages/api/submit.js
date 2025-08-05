// pages/api/submit.js
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const filePath = path.join(process.cwd(), 'data', 'submissions.json');
    const newSubmission = req.body;

    // Read existing data
    let data = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath);
      data = JSON.parse(fileData);
    }

    // Add new submission
    data.push(newSubmission);

    // Save to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'eldhosejohny100@gmail.com',
        pass: 'qwtr vrxz rlbx uztu', // Your App Password
      },
    });

    const mailOptions = {
      from: 'eldhosejohny100@gmail.com',
      to: 'eldhosejohny100@gmail.com',
      subject: 'New Idea Submission',
      text: `
New Idea Submitted:

Name: ${newSubmission.name}
Email: ${newSubmission.email}
Idea: ${newSubmission.idea}
Stage: ${newSubmission.stage}
Sector: ${newSubmission.sector}
Tech or Non-Tech: ${newSubmission.techNonTech}
Visa Status: ${newSubmission.visaStatus}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Submission successful and email sent' });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ message: 'Submission saved, but email failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
