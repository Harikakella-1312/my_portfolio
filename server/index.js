import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kedhargo1@gmail.com', // Your Gmail address
        pass: 'pxry vhzm rwns pobd', // Your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'your.email@gmail.com',
      subject: `Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});


