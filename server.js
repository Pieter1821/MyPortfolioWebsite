app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configure the email transport using Nodemailer
    const transporter = nodemailer.createTransport({
      // Replace with your email service provider details
      service: 'Gmail',
      auth: {
        user: 'deanepieter@gmail.com',
        pass: 'your-email-password'
      }
    });

    // Define the email content
    const mailOptions = {
      from: 'your-email@example.com',
      to: 'deanepieter@gmail.com', // Set your own email address as the recipient
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});



/*TODOContact.jsx:32  Error sending email: Not Found*
fix this error*/