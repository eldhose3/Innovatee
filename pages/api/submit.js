// pages/api/submit.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const submission = req.body;

    // Send email
    try {
      const nodemailer = await import('nodemailer');

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Innovate" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: 'New Idea Submission',
        text: `
New Idea Submitted:

Name: ${submission.name}
Email: ${submission.email}
Idea: ${submission.idea}
Stage: ${submission.stage}
Sector: ${submission.sector}
Tech/Non-Tech: ${submission.techType}
Visa Status: ${submission.visaStatus}
        `,
      });

      return res.status(200).json({ message: 'Submission successful' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
