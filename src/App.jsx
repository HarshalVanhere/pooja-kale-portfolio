import { useState } from 'react'
import './App.css'
import backgroundImage from './assets/images/69638974-portfolio-wallpapers.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <div className="logo">PK</div>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section" style={{ '--bg-image': `url(${backgroundImage})` }}>
        <div className="hero-content">
          <div className="profile-image">
            <img src="src\assets\images\pooja.jpeg" alt="Pooja Kale" />
          </div>
          <h1>Pooja Kale</h1>
          <h2>MBA in Marketing & HR</h2>
          <p className="hero-description">Strategic Marketer | HR Enthusiast | Data-Driven Thinker</p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button primary">Contact Me</a>
            <a href="/Pooja_Kale_Resume.pdf" className="cta-button secondary" download>Download Resume</a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="section">
        <div className="section-content">
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a highly motivated MBA student specializing in Marketing and HR. I bring a solid foundation in strategy, people management, and data reporting. My experience spans across academic research, digital media leadership, and active involvement in extracurricular initiatives like sports and media clubs.</p>
              <p>With a passion for sketching, photography, and video editing, I merge creativity with business sense. I'm also knowledgeable about financial markets and committed to lifelong learning.</p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Certifications</p>
              </div>
              <div className="stat-item">
                <h3>3</h3>
                <p>Languages Known</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="section">
        <div className="section-content">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                </svg>
              </div>
              <div className="timeline-content">
                <h3>MBA in Marketing & HR</h3>
                <p className="institution">Savitribai Phule Pune University</p>
                <p className="year">2024 - 2026</p>
                <p className="description">CGPA: 8.01/10</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <div className="timeline-content">
                <h3>B.Sc. in Zoology</h3>
                <p className="institution">Savitribai Phule Pune University</p>
                <p className="year">2021 - 2024</p>
                <p className="description">CGPA: 7.81/9.5</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div className="timeline-content">
                <h3>Higher Secondary (HSC)</h3>
                <p className="institution">Savitribai Phule Pune University</p>
                <p className="year">2020 - 2021</p>
                <p className="description">Percentage: 89%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Research */}
      <section id="projects" className="section">
        <div className="section-content">
          <h2>Projects & Research</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Expansion of BRICS+ and Global Trade Dynamics</h3>
              <p>Explored the trade implications and economic impact of expanding BRICS+ nations globally.</p>
            </div>
            <div className="project-card">
              <h3>Phenotypic Variability of Tongue Rolling</h3>
              <p>Studied genetic traits and phenotypic patterns across a population sample.</p>
            </div>
            <div className="project-card">
              <h3>Impact of Sustainable Fashion</h3>
              <p>Analyzed the environmental consequences of fashion trends and proposed green practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section id="skills" className="section">
        <div className="section-content">
          <h2>Skills & Tools</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <ul>
                <li>Excel & Financial Reporting</li>
                <li>Microsoft Word, PowerPoint</li>
                <li>Power BI</li>
                <li>Data Analysis</li>
                <li>Canva & Design Tools</li>
                <li>Social Media Management</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Leadership</li>
                <li>Positive Attitude</li>
                <li>Teamwork</li>
                <li>Time Management</li>
                <li>Creative Thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-content">
          <h2>Contact Me</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <p>Email: <a href="mailto:kale50148@gmail.com">kale50148@gmail.com</a></p>
              </div>
              <div className="contact-item">
                <p>LinkedIn: <a href="https://www.linkedin.com/in/pooja-kale-35305a299" target="_blank" rel="noreferrer">pooja-kale-35305a299</a></p>
              </div>
              <div className="contact-item">
                <p>Phone: <a href="tel:+918668540676">+91 8668540676</a></p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">PK</div>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <p>Made with 💙 by Harshal Vanhere</p>
        </div>
      </footer>
    </div>
  )
}

export default App
