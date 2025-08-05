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

    // Write updated data
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // Send email to admin
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'eldhosejohny100@gmail.com',
          pass: 'qwtr vrxz rlbx uztu'
        }
      });

      const mailOptions = {
        from: 'eldhosejohny100@gmail.com',
        to: 'eldhosejohny100@gmail.com',
        subject: 'New Idea Submission',
        text: `
New Idea Submitted

Name: ${newSubmission.name}
Email: ${newSubmission.email}
Idea: ${newSubmission.idea}
Stage: ${newSubmission.stage}
Sector: ${newSubmission.sector}
Tech or Non-Tech: ${newSubmission.techOrNonTech}
Visa Status: ${newSubmission.visaStatus}
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }

    res.status(200).json({ message: 'Submission successful and email sent.' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
