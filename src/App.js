import React from 'react';
import './App.css';
import {
    Navbar, Home, About, Projects, Skills, Contact
} from './components/Components';
import './components/Components.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Contact />
            <About />
            <Projects />
            <Skills />
            
        </div>
    );
}

export default App;
