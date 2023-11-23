import React from 'react';
import './Components.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Wesley Soto
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

function Home() {
    return (
        <section id="home" className="home-section section">
            <h1>Welcome</h1>
            <p>I'm Wesley Soto, a Software Engineer specialized in Full-Stack Development and Data Science/ML.</p>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="about-section section">
            <h2>About Me</h2>
            <p>With a passion for automating and optimizing processes, I've led significant automation initiatives at Optum and UnitedHealthcare, achieving substantial cost savings and efficiency gains. My expertise spans across Python, Node.js, TypeScript, Rust, and cloud platforms like Azure and GCP, focusing on compliant, secure, and scalable solutions in healthcare.</p>
        </section>
    );
}

function Projects() {
    return (
        <section id="projects" className="projects-section section">
            <h2>Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Medicare & Retirement Claims Automation</h3>
                    <p>Developed an AI-integrated solution that streamlined processes for Medicare and Retirement claims, contributing to over $3M in claim payouts and significantly improving the quality of service.</p>
                </div>

                <div className="project-card">
                    <h3>Process Automation at Optum</h3>
                    <p>Led the implementation of RPAs and ETLs using Python and Node.js, achieving $572K in capital cost savings and $210K in annual recurring costs, enhancing overall operational efficiency.</p>
                </div>

                <div className="project-card">
                    <h3>Cloud Solutions with Azure/GCP</h3>
                    <p>Implemented robust cloud solutions on Azure and Google Cloud Platform, focusing on stringent security protocols compliant with HIPAA, PHI, and PII, ensuring secure and scalable infrastructure.</p>
                </div>

                {/* Add more ProjectCard components as needed */}
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section id="skills" className="skills-section section">
            <h2>Technical Skills</h2>
            <div className="skills-container">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <ul className="skill-list">
                        <li>Python</li>
                        <li>TypeScript</li>
                        <li>Rust</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Frameworks & Libraries</h3>
                    <ul className="skill-list">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Django</li>
                        <li>Scikit-Learn</li>
                        <li>Tensorflow</li>
                        <li>Keras</li>
                        <li>Pandas</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Infrastructure & Compliance</h3>
                    <ul className="skill-list">
                        <li>Database Management: SQL, NoSQL</li>
                        <li>Compliance: HIPAA, PHI, PII</li>
                        <li>Cloud Platforms: GCP, Azure</li>
                        <li>System Design: Microservices, ETL</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Process & Project Management</h3>
                    <ul className="skill-list">
                        <li>Project Leadership</li>
                        <li>Machine Learning & Data Analysis</li>
                        <li>Development: Full-Stack, Front-End, Back-End</li>
                        <li>DevOps: Docker, Kubernetes, Git</li>
                        <li>Automation: Process Automation, RPAs</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Other Technical Skills</h3>
                    <ul className="skill-list">
                        <li>Technical Communication</li>
                        <li>Datasets Management</li>
                        <li>Linux System Management</li>
                        <li>AI-Integrated Solutions</li>
                        <li>Prompt Engineering</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}


function Contact() {
    return (
        <section id="contact" className="contact-section section">
            <h2>Contact</h2>
            <p>Feel free to reach out through any of the following platforms:</p>
            
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/wesley-soto-b9a2217b/" target="_blank" rel="noopener noreferrer">
                    <img src="https://static.licdn.com/aero-v1/sc/h/fzptdwtvgnpgk4tf76hulq7" alt="LinkedIn" />
                </a>
                <a href="https://github.com/algorusty" target="_blank" rel="noopener noreferrer">
                    <img src="./github-mark.png" alt="GitHub" />
                </a>
                <a href="mailto:jobs@wesleysoto.dev" target="_blank" rel="noopener noreferrer">
                    jobs@wesleysoto.dev
                </a>
            </div>

            <form>
                {/* Contact form elements go here */}
            </form>
        </section>
    );
}


export {
    Navbar,
    About,
    Projects,
    Contact,
    Home,
    Skills,
};
