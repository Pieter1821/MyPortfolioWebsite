
import { useState } from "react";
import emailjs from 'emailjs-com';
import '../styles/Contact.css'

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form submitted");

      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData.entries());

      const serviceId = 'service_eny5cjq';
      const templateId = 'template_uhcpi79';
      const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("Payload:", payload);

      const response = await emailjs.send(serviceId, templateId, payload, userId);

      console.log("Email response:", response);

      if (response.status === 200) {
        console.log("Email sent successfully");

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

  console.log("Rendering Contact component");

  return (
    <section className="contact">
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
        </div>
      )}
    </section>
  );
};

export default Contact;
