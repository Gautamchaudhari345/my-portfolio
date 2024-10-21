import React, { useState } from 'react';
import { FaPaperPlane, FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700 py-16 px-4 text-white" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in-up">Get In Touch</h2>
        <p className="text-lg mb-12 animate-fade-in-up delay-200">
          I’d love to hear from you! Please fill out the form below to reach out.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3  text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 border text-black  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded flex items-center justify-center transition transform hover:scale-105"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>

        {successMessage && (
          <div className="mt-4 text-green-300 font-semibold animate-fade-in-up">
            {successMessage}
          </div>
        )}

        {/* Social Links Section */}
        <div className="mt-12 text-lg">
          <h3 className="text-2xl font-bold mb-4">Connect with Me</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:gautamchaudhari345@gmail.com"
              className="flex items-center text-white hover:text-blue-200"
            >
              <FaEnvelope className="text-2xl mr-2" />
              Gmail
            </a>
            <a
              href="https://www.instagram.com/your-instagram/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-blue-200"
            >
              <FaInstagram className="text-2xl mr-2" />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/gautam-chaudhary-90b349246/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-blue-200"
            >
              <FaLinkedin className="text-2xl mr-2" />
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/your-facebook/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-blue-200"
            >
              <FaFacebook className="text-2xl mr-2" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
