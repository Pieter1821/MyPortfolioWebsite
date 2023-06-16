import '../styles/Contact.css'
import  { useState } from 'react';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating successful form submission
    // You can replace this with your own form submission logic

    // Display the modal message
    setShowModal(true);

    // Reset form fields
    e.target.reset();

    // Hide the modal after 3 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
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
        <div className="modal">
          <p>Message sent successfully!</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
