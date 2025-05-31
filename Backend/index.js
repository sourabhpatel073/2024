const express = require("express");
const { mogoConnection } = require("./Server/server");

let app = express();

app.listen(8080, async () => {
  try {
    await mogoConnection
    console.log("server is connected to db");
  } catch (err) {
    console.log("error", err);
  }
  console.log("server is running on port 8080");
});

app.post('/send-email', (req, res) => {
  // Email content
  
  const { sender, recipient, subject, body } = req.body;

  const mailOptions = {
    from: sender||'sourabhpatel073@gmail.com', // Sender address
    to: recipient||'sourabhwebdev67@gmail.com', // List of recipients
    subject:subject||'Test Email', // Subject line
    text: body||'This is a test email sent from Nodemailer.', // Plain text body
    // html: '<p>This is a test email sent from Nodemailer.</p>' // HTML body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});
