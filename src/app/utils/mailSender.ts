/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";

// import Cases from "../models/CasesModel";

export const mailSenderService = async (mailSender: any) => {
  const { name, message, website, email } = mailSender;
  console.log(mailSender);
  const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
      user: "support@itcoreltd.com",
      pass: "@Tamzid0809",
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${"support@itcoreltd.com"}>`,
      to: "support@itcoreltd.com",
      subject: name,
      text: website,
      date: new Date(),
      html: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
      <div> <p>name : ${name}</p> <p>E-mail : ${email}</p> <p>My website : ${website}</p>  <p> ${message}</p>  </div>
      </body>
    </html>`,
    });
    return "Email sent successfully";
  } catch (error) {
    // console.error("Error sending email:", error);
    throw new Error("E-mail send flied, support@itcoreltd.com");
    // return "Email sent successfully";
  }
};
