import { error } from 'console';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

  export const handleSendMail = async (data : {
    from : string,
    to : string,
    subject: string,
    text: string,
    html : string
  }) => {
    try {
      const res = await transporter.sendMail(data);
    return (res)
    } catch (error : any) {
      throw new Error (error.message)
    }
  }

