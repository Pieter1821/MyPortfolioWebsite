import { useState } from "react";
import '../styles/Contact.css'

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading state or disable the submit button

    try {
      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData.entries());

      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        e.target.reset();
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 3000);
      } else {
        // Handle error state, e.g., show error message or enable submit button again
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error state, e.g., show error message or enable submit button again
    }
  };

  return (
    <section className="contact">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Enter your message" required></textarea>

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
