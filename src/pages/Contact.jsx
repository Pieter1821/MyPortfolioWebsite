
import { useState } from "react";
import emailjs from 'emailjs-com';
import '../styles/Contact.css'

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData(e.target);
      const payload = {
        user_name: formData.get('name'),
        user_email: formData.get('email'),
        user_message: formData.get('message')
      };
  
      const serviceId = 'service_eny5cjq';
      const templateId = 'template_uhcpi79';
      const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
      const response = await emailjs.send(serviceId, templateId, payload, userId);
  
      if (response.status === 200) {
        e.target.reset();
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      } else {
        console.error('Error sending email:', response.text);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" placeholder="Enter your message" required></textarea>

        <button type="submit">Submit</button>
        
        
      </form>
      
      {showModal && (
        <div className="modal" role="alertdialog">
        <p>Message sent successfully!</p>
        <p>Thank you for getting in touch. I'll be reaching out to you soon.</p>
      </div>
      
      )}
    </div>
  );
};

export default Contact;
