import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import useScrollAnimation from './useScrollAnimation';

// Main portfolio component
function App() {
  const [isDark, setIsDark] = useState(false);

  // Apply dark mode
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Scroll to section
  const handleIconClick = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Send contact form
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error: Could not connect to server.');
    }
  };

  // Add scroll animation for about image
  useScrollAnimation('.about-image');

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Section id="home" className="section section-home">
        <h1>K Harika Satya Shivani</h1>
        <p className="role">Full Stack Java Developer</p> <p className="location">Atlanta, Georgia </p>
        <div className="section-home-buttons">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v13H7V8h14zm-1-6h-5v2h5v2h2V4c0-1.1-.9-2-2-2zm-8 2H9v2h3V4zm-2 0H7v2h3V4zM3 9h2v12H3V9zm4-2h2v14H7V7zm6 0h2v14h-2V7z" />
            </svg>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.14 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <button onClick={() => handleIconClick('#contact')}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </Section>
      <Section id="about" className="section section-about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p>I am a highly experienced and results-driven software engineer currently pursuing my Master’s in Computer Science at Georgia State University. 
              With a strong background in full-stack development, data engineering, and machine learning, I’ve had the opportunity to work on impactful projects both in academic and professional settings. 
              I specialize in building scalable, secure, and efficient applications using technologies such as Java, Spring Boot, Python, SQL, React, Docker, Jenkins, and AWS. 
              My hands-on experience spans across backend API development, CI/CD automation, cloud deployment, and AI-driven solutions. 
              With a solid foundation in data structures, algorithms, and system design, I bring a problem-solving mindset and a passion for innovation to every team I work with.</p>
          </div>
          <div className="about-image">
            <img src="src/assets/hariks_profile.jpg" alt="Profile" />
          </div>
        </div>
      </Section>
      <Section id="projects" className="section section-projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="NAIP Wastewater Plant Detection"
            description="Applied deep learning-based semantic segmentation and CNN classification models to detect wastewater treatment plants from NAIP satellite imagery. Leveraged geospatial data preprocessing and model inference pipelines to automate environmental infrastructure identification."
            link="#"
            image="src\assets\water.jpg"
          />
          <ProjectCard
            title="Hotel Booking Cancellation Prediction"
            description="Built predictive models using Random Forest and SVM, achieving 93% and 91% accuracy respectively, for booking cancellation forecasting. Engineered features from raw booking data and optimized model performance through hyperparameter tuning and cross-validation."
            link="#"
            image="src\assets\image23.png"
          />
          <ProjectCard
            title="Conference Management System"
            description="Designed a multi-module system using MySQL for managing conference workflows including registration, scheduling, and resource allocation. Implemented role-based access control (RBAC) and dynamic database queries to ensure secure and efficient user interactions."
            link="#"
            image="src\assets\image.png"
          />
        </div>
      </Section>
      <Section id="contact" className="section section-contact">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <p>Email: your.email@example.com<br />
             LinkedIn: linkedin.com/in/yourprofile<br />
             GitHub: github.com/yourusername</p>
        </div>
        <form onSubmit={handleContactSubmit} className="contact-form">
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </Section>
    </div>
  );
}

export default App;