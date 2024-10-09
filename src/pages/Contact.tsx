import { useState , useRef } from "react";





import emailjs from 'emailjs-com';
import '../styles/Contact.css'
import React from "react";


const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      if (!formRef.current) throw new Error("Form not found");

      const formData = new FormData(formRef.current);
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
        formRef.current.reset();
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" placeholder="Enter your message" required></textarea>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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