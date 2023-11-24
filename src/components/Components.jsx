import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink

import './Components.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link smooth className="navbar-brand" to="#home">
                Wesley Soto
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link smooth className="nav-link" to="#home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth className="nav-link" to="#contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth className="nav-link" to="#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth className="nav-link" to="#projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth className="nav-link" to="#skills">Skills</Link>
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
                <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                </a>
                <a href="mailto:jobs@wesleysoto.dev" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path></svg>
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
