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

    const mailOptions = {
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

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}