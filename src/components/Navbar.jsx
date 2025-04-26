import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


// Navigation bar
function Navbar({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        {/* <a href="#home">Home</a> */}
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#education">Education</a>
        {/* <TypeAnimation className='type-animation'
              sequence={[

                '🚀 Turning coffee into code & bugs into features — welcome to my digital playground',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                '👋 Im Harika software engineer by day, debugger by night, and snack enthusiast 24/7',
                1000,
                '💻 Code, compile, deploy, repeat. I build things for the web (and occasionally break them first)',
                1000,
                '✨ Warning: High levels of caffeine and curiosity detected. Proceed with tech talk.',
                1000
              ]}
              wrapper="span"
              omitDeletionAnimation	= {true}
              cursor={true}
              speed={28}
              style={{ fontSize: '20px',display: 'inline-block' }}
              repeat={Infinity}
          /> */}
      </div>
      <div className="navbar-controls">
        <button className="navbar-theme" onClick={toggleTheme}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isDark
                  ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              }
            />
          </svg>
        </button>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;