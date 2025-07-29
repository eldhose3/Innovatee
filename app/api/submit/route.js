import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, idea, stage, sector, techType, visaStatus } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Admin (you)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Idea Submission from Innovate",
      text: `
New submission received:

Name: ${fullName}
Email: ${email}
Idea: ${idea}
Stage: ${stage}
Sector: ${sector}
Tech Type: ${techType}
Visa Status: ${visaStatus}
      `,
    };

    // Confirmation Email to Submitter
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for submitting your idea to Innovate!",
      text: `
Hi ${fullName},

Thank you for sharing your idea with us at Innovate. We're excited to review it and support your journey ahead.

If we need any more details, we’ll reach out to you.

Cheers,  
Innovate Team
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(JSON.stringify({ message: "Emails sent successfully" }), {
      status: 200,
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
