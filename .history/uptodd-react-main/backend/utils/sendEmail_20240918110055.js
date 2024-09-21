import nodemailer from "nodemailer"
import path from "path"

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your email", // Replace with your email
    pass: "your password", // Replace with your email password (use an app password if 2FA is enabled)
  },
})

// Send the email
export const sendEmail = async (
  fullname,
  email,
  phone,
  gender,
  jobrole,
  resume
) => {
  const mailOptions = {
    from: "forthirdpartysites@gmail.com",
    to: "forthirdpartysites@gmail.com", // Replace with your email
    subject: "New Job Application",
    text: `New job application received from ${fullname}.\n\nFull Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}\nJob Department: ${jobrole}`,
    attachments: [
      {
        filename: resume.originalname,
        path: `uploads/${resume.filename}`,
      },
    ],
  }
  try {
    const mail = await transporter.sendMail(mailOptions)
    if (mail.accepted.length) {
      return true
    } else return false
  } catch (error) {
    return false
  }
}
