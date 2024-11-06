import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "dangtranlamfpt@gmail.com",
      pass: "tl@1234tl#4567!",
    },
  });

  const handleSendMail = async () => {
        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: "dangtranlamfpt@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
    
  }

