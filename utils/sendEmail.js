const nodemail = require("nodemailer");//this 3rd party module used to send email
const { MailUser, MailPass } = require("../config/keys");

const sendEmail = async ({ emailTo, subject, code, content }) => {
  const transporter = nodemail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: MailUser,
      pass: MailPass,
    },
  });

  const message = {
    to: emailTo,
    subject,
    html: `
        <div>
          <h3>Use this below code to ${content}</h3>
          <p><strong>Code: </strong> ${code}</p>
        </div>
      `,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;