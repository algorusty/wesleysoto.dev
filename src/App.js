import React, { useEffect } from 'react';
import './App.css';
import {
    Navbar, Home, About, Projects, Skills, Contact
} from './components/Components';
import './components/Components.css';

function App() {
    useEffect(() => {
        // Function to select a random background
        const selectRandomBackground = () => {
            const backgrounds = ['background-hard.png', 'background-soft.png', 'background.png'];
            const randomIndex = Math.floor(Math.random() * backgrounds.length);
            const randomBackground = backgrounds[randomIndex];
            // Set the CSS variable to the selected background
            document.documentElement.style.setProperty('--random-background', `url('../../public/${randomBackground}')`);
        };

        selectRandomBackground();

        // Function to generate a random value between -10px and 10px
        function getRandomPosition() {
            return Math.floor(Math.random() * 21) - 30 + 'px';
        }

        // Function to update the background position
        function updateBackgroundPosition() {
            const x = `calc(50% + ${getRandomPosition()})`;
            const y = `calc(50% + ${getRandomPosition()})`;
            document.body.style.backgroundPosition = `${x} ${y}`;
        }

        // Update the background position every 5 seconds
        const intervalId = setInterval(updateBackgroundPosition, 5000);

        // Clean up function
        return () => {
            clearInterval(intervalId);
        };
    }, []);

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
