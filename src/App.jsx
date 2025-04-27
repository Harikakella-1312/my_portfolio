import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import useScrollAnimation from './useScrollAnimation';
import { TypeAnimation } from 'react-type-animation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Lottie from 'lottie-react';
import cartoonCoderAnimation from './assets/animations/name_background.json';
import './styles.css';
import cartoonCoder1Animation from './assets/animations/home-card.json';
import cartoonCoderbAnimation from './assets/animations/blue_background.json';
import './styles.css';
import cartoonCoderoAnimation from './assets/animations/orange.json';
import cartoonCoderfAnimation from './assets/animations/final.json';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const projectsContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleIconClick = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  useScrollAnimation('.scroll-section-home');
  useScrollAnimation('.scroll-section-about');
  useScrollAnimation('.about-image');
  useScrollAnimation('.scroll-section-skills');
  useScrollAnimation('.skills-item');
  useScrollAnimation('.certification-card');
  useScrollAnimation('.scroll-section-experience');
  useScrollAnimation('.scroll-experience-tabs');
  useScrollAnimation('.scroll-section-education');
  useScrollAnimation('.edu-item');
  useScrollAnimation('.scroll-section-projects');
  useScrollAnimation('.scroll-section-contact');

  const scrollProjects = (direction) => {
    const container = projectsContainerRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const skills = [
    { name: 'Java', image: '/assets/skills/java-logo.png' },
    { name: 'Spring Boot', image: '/assets/skills/spring-boot.png' },
    { name: 'Python', image: '/assets/skills/python-logo.jpg' },
    { name: 'MySQL', image: '/assets/skills/mysql.png' },
    { name: 'React', image: '/assets/skills/react-logo.png' },
    { name: 'Docker', image: '/assets/skills/docker.png' },
    { name: 'Jenkins', image: '/assets/skills/jenkins-logo.jpg' },
    { name: 'AWS', image: '/assets/skills/AWS-logo.png' },
    { name: 'CSS', image: '/assets/skills/css.png' },
    { name: 'Angular', image: '/assets/skills/Angular.jpg' },
    { name: 'Django', image: '/assets/skills/dijango.png' },
    { name: 'DynamoDB', image: '/assets/skills/dynamo db.png' },
    { name: 'GCP', image: '/assets/skills/GCP.png' },
    { name: 'git', image: '/assets/skills/git.png' },
    { name: 'Grafana', image: '/assets/skills/Grafana.png' },
    { name: 'HTML', image: '/assets/skills/html.png' },
    { name: 'Jira', image: '/assets/skills/jira.png' },
    { name: 'Javascript', image: '/assets/skills/js logo.png' },
    { name: 'Linux', image: '/assets/skills/linux.png' },
    { name: 'Nodejs', image: '/assets/skills/nodejs.png' },
    { name: 'PHP', image: '/assets/skills/PHP.png' },
    { name: 'Postman', image: '/assets/skills/post man.png' },
    { name: 'TypeScript', image: '/assets/skills/TypeScript-logo.png' },
    { name: 'Splunk', image: '/assets/skills/slunk.png' },
    { name: 'Keras', image: '/assets/skills/keras.png' },
    { name: 'Maven', image: '/assets/skills/maven.png' },
    { name: 'MongoDB', image: '/assets/skills/mongo.png' },
    { name: 'Postgresql', image: '/assets/skills/postgre.png' },
    { name: 'Tensorflow', image: '/assets/skills/tensorflow.png' },
  ];
  
  const education = [
    {
      title: 'Master’s in Computer Science',
      institution: 'Georgia State University',
      link: 'https://www.gsu.edu/',
      dates: '2023 - Present',
      location: 'Atlanta, GA',
      logo: '/assets/georgia-state-university-logo.png',
    },
    {
      title: 'Bachelor’s in Computer Science',
      institution: 'Gitam University',
      link: 'https://www.gitam.edu/',
      dates: '2018 - 2022',
      location: 'India',
      logo: '/assets/gitam.png',
    },
  ];

  const experiences = [
    {
      company: 'GSU',
      logo: '/assets/gsu_logo.jpg',
      role: 'Graduate Research Assistant',
      dates: 'Aug 2023 - Present',
      location: 'Atlanta, GA',
      descriptionPoints: [
        'Architected and deployed a full-stack web application using Java, Spring Boot, Thymeleaf, and MySQL, streamlining academic request workflows and reducing turnaround time by 20% through process automation',
        'Developed RESTful APIs with JWT authentication, exception handling, and input validation, resulting in secure and scalable backend services with 99.9% uptime.',
        'Implemented CI/CD pipelines using Git, Jenkins, and Docker, accelerating deployment cycles by 35% and improving delivery consistency across environments.',
        'Refactored legacy code and optimized database queries with JPA/Hibernate, boosting system performance by 25% and enhancing code maintainability.',
        'Conducted unit and integration testing with JUnit and Mockito, achieving 90%+ test coverage and reducing post-deployment bugs by 40%.',
        'Created detailed technical documentation and UML diagrams, cutting developer onboarding time by 30% and promoting seamless team collaboration.',
      ]
    },
    {
      company: 'Accenture',
      logo: '/assets/accenture logo.png',
      role: 'Data Engineering Associate',
      dates: 'Jun 2022 - July 2023',
      location: 'India',
      descriptionPoints: [
        'Developed complex SQL queries for ETL workflows, streamlining data extraction, transformation, and loading processes, which boosted analytics accuracy and reduced report generation time by 30%.',
        'Engineered an internal platform for error debugging, exception handling, and dependency mapping, resulting in a 40% decrease in client system downtime and faster issue resolution.',
        'Leveraged tools such as Grafana, Splunk, Tomcat, Maven, and Nexus to monitor application health and automate CI/CD pipelines, improving deployment reliability by 35%.',
        'Automated environment setup and release workflows through Nexus repository configuration and CI/CD integration, reducing manual errors and deployment time by 25%.',
        'Utilized cloud-based infrastructure including AWS EC2, along with Linux and Git, to enhance deployment efficiency and system scalability in distributed environments.',
        'Collaborated in Agile sprints with cross-functional teams to debug production issues and optimize system performance, ensuring high availability and consistent uptime.',
      ]
    },
    {
      company: 'Smartknower',
      logo: '/assets/smartknower-logo.jpg',
      role: 'Programming Intern',
      dates: 'Jun 2022 - Aug 2022',
      location: 'India',
      descriptionPoints: [
        'Implemented a mask detection system using CNNs and transfer learning (e.g., MobileNetV2, ResNet50), achieving 92%+ accuracy across diverse facial inputs in real-time scenarios.',
        'Preprocessed large-scale image datasets and applied feature extraction and augmentation techniques, reducing false positives by 20% and enhancing model robustness.',
        'Demonstrated deep learning expertise by engineering a model capable of detecting mask-wearing patterns under varied conditions, using TensorFlow, Keras, and OpenCV.'
      ]
    }
  ];

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Section id="home" className="section section-home scroll-section-home">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          key={isDark ? 'dark' : 'light'}
        >
          <source src={isDark ? "/assets/dark.mp4" : "/assets/light2.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="lottie-background">
          <Lottie animationData={cartoonCoderAnimation} loop={true} />
        </div> */}
        <div className="lottie-background">
          <Lottie animationData={cartoonCoderoAnimation} loop={true} />
        </div>
        {/* <div className="lottie-backgroundb">
          <Lottie animationData={cartoonCoderbAnimation} loop={true} />
        </div> */}
        <div className="lottie-background1">
          <Lottie animationData={cartoonCoder1Animation} loop={true} />
        </div>
        <div className="video-overlay"></div>
        <div className="hero-content">
          <h1 fontSize='10'>Harika Kella</h1>
          <TypeAnimation
            className="type-animation"
            sequence={[
              '🚀 Believe me, Im a Software Development Engineer',
              1000,
              '👋 Java Full Stack Developer',
              1000,
            ]}
            wrapper="span"
            omitDeletionAnimation={true}
            cursor={true}
            speed={22}

            style={{ fontSize: '28px', display: 'inline-block', marginTop: '3px' }}
            color="white"
            fontWeight="bold"
            repeat={Infinity}
          />
          <p className="location">Atlanta, Georgia</p>
          <div className="section-home-buttons">

            <a href="https://www.linkedin.com/in/harika-kella-423a211b6/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
                <path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path>
              </svg>
            </a>

            <a href="https://github.com/Harikakella-1312" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>

            <a href="https://leetcode.com/u/GO1/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="13px" width="100" height="200" viewBox="0 0 20 30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 13h7.5" /><path d="M9.424 7.268l4.999 -4.999" /><path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
              </svg>
            </a>

            <button onClick={() => handleIconClick('#contact')}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>

            <a href="https://drive.google.com/file/d/1Tffkhsglq_z-8UcNft4_SaQamNv9pnrq/view" target="_blank" rel="noopener noreferrer" className="download-cv-button">
              Resume
            </a>
          </div>
        </div>
      </Section>
      <Section id="about" className="section section-about scroll-section-about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p>Hello, I’m Harika Kella, a Computer Science grad student at Georgia State University, buzzing with energy like a double-shot espresso, 
              ready to tackle code and conquer deadlines with a grin! 😄 I’m the kind of developer who dives into Java, Spring Boot,
              and AI/ML with the enthusiasm of a kid in a candy store, delivering slick, scalable apps with unwavering consistency. My work ethic? Rock-solid, 
              like my Wi-Fi during a crunch-time deploy—always on, always reliable. 💪 I juggle AWS, Docker, and CI/CD pipelines with a playful smirk, but when it’s go-time, 
              I’m laser-focused, committed to crafting solutions that wow users and keep systems humming. Whether I’m debugging at 2 a.m. or brainstorming the next big feature,
              Let’s team up to build something epic—serious results, with a side of fun! 🚀</p>
          </div>
          <div className="lottie-background">
          <Lottie animationData={cartoonCoderfAnimation} loop={true} />
          </div>
          <div className="about-image">
            <img src="/assets/hariks_profile.jpg" alt="Profile" />
          </div>
        </div>
      </Section>
      <Section id="education" className="section section-education scroll-section-education">
        <h2>My Education</h2>
        <div className="education-container">
          {/* <div className="lottie-backgroundb">
            <Lottie animationData={cartoonCoderbAnimation} loop={true} />
          </div> */}
          <div className="lottie-backgroundb">
            <Lottie animationData={cartoonCoderoAnimation} loop={true} />
          </div>
          <div className="education-image">
            <img src="/assets/college.jpg" alt="College Picture" height={400} width={900}/>
          </div>
          <div className="education-details">
            {education.map((edu, index) => (
              <div key={index} className="edu-item">
                <div className="edu-logo">
                  <img src={edu.logo} alt={`${edu.institution} logo`} />
                </div>
                <div className="edu-content">
                  <h3>{edu.title}</h3>
                  <p className="edu-institution" link={edu.link}>{edu.institution} </p>
                  <p className="edu-dates">{edu.dates}</p>
                  <p className="edu-location">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="experience" className="section section-experience scroll-section-experience">
        <h2>Work Experience</h2>
        <div className="experience-container">
          <div className="experience-tabs scroll-experience-tabs">
            { experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-tab ${activeExperience === index ? 'active' : ''}`}
                onClick={() => setActiveExperience(index)}
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="experience-tab-logo"
                />
                <span className="experience-tab-name">{exp.company}</span>
              </div>
            ))}
          </div>
          <div className="experience-content">
            {activeExperience !== null && (
              <div className="experience-content-details">
                <h3 className='role-name'>{ experiences[activeExperience].role} @ { experiences[activeExperience].company}</h3>
                <p className="details-dates">{ experiences[activeExperience].dates}</p>
                <p className="details-location">{ experiences[activeExperience].location}</p>
                <ul className="details-description">
                  { experiences[activeExperience].descriptionPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Section>
      <Section id="projects" className="section section-projects scroll-section-projects">
        <h2>My Projects</h2>
        <div className="projects-container">
          <button className="scroll-button left" onClick={() => scrollProjects('left')}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="projects-grid" ref={projectsContainerRef}>
            <ProjectCard
              title="NAIP Wastewater Plant Detection"
              description="Applied deep learning-based semantic segmentation and CNN classification models to detect wastewater treatment plants from NAIP satellite imagery. Leveraged geospatial data preprocessing and model inference pipelines to automate environmental infrastructure identification."
              link="https://github.com/Harikakella-1312/Waste-water-plant-detection-system"
              image="/assets/water.jpg"
            />
            <ProjectCard
              title="Hotel Booking Cancellation Prediction"
              description="Built predictive models using Random Forest and SVM, achieving 93% and 91% accuracy respectively, for booking cancellation forecasting. Engineered features from raw booking data and optimized model performance through hyperparameter tuning and cross-validation."
              link="https://github.com/Harikakella-1312"
              image="/assets/image23.png"
            />
            <ProjectCard
              title="Conference Management System"
              description="Designed a multi-module system using MySQL for managing conference workflows including registration, scheduling, and resource allocation. Implemented role-based access control (RBAC) and dynamic database queries to ensure secure and efficient user interactions."
              link="https://github.com/Harikakella-1312/Conference-Management-System"
              image="/assets/image.png"
            />
            <ProjectCard
              title="Speech Emotion Recognition Mode"
              description="Developed an emotion classifier using Mel-Frequency Cepstral Coefficients (MFCCs) and Machine Learning algorithms to analyze speech signals. Integrated Speech Signal Processing techniques with supervised learning models for emotion detection accuracy."
              link="https://github.com/Harikakella-1312"
              image="/assets/speech_recognition.png"
            />
            <ProjectCard
              title="Organica Heaven Ecommerce Website"
              description="Built a full-stack e-commerce platform using HTML, CSS, JavaScript, PHP, and MySQL with local deployment via XAMPP. Implemented CRUD operations, session handling, and product search/filter functionality to enhance user experience."
              link="https://github.com/Harikakella-1312"
              image="/assets/organica.jpg"
            />
          </div>
          <button className="scroll-button right" onClick={() => scrollProjects('right')}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Section>
      <Section id="skills" className="section section-skills scroll-section-skills">
        <h2>My Skills & Certifications</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skills-item">
              <img src={skill.image} alt={skill.name} title={skill.name} />
            </div>
          ))}
        </div>
        <div className="certification-container">
          <div className="certification-card">
            <div className="certification-item">
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image="/assets/certification/aws-certification.jpg"
                  alt="AWS Certification Badge"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    AWS Certified Developer – Associate
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    March 2025
                  </Typography>
                  <a
                    href="https://www.credly.com/badges/99a895ae-d5fb-4fa7-b063-dcb16e31a329/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    <svg
                      className="certification-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-4" />
                      <path d="M10 16h4" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </div>
            <div className="certification-item">
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="150"
                  image="/assets/certification/groceries.jpg"
                  alt="Publication"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    A grocery level indicator for household application device
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Publication
                  </Typography>
                  <a
                    href="https://www.ijasret.com/VolumeArticles/FullTextPDF/681_7.A_GROCERY_LEVEL_INDICATOR_FOR_HOUSEHOLD_APPLICATION_DEVICE_USING_IOT.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link"
                  >
                    <svg
                      className="certification-link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-4" />
                      <path d="M10 16h4" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      <Section id="contact" className="section section-contact scroll-section-contact">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          {'Dont be shy — your next favorite developer is just a message away. 😉 '}
        </div>
        <form
          action="https://formsubmit.co/harika.s.kella@gmail.com"
          method="POST"
          className="contact-form"
        >
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