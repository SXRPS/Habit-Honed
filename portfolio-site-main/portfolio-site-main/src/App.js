import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>

            </div>
            <div className={'restPage'}>
                <header>
                    <h1>Marc Serpa</h1>
                    <p>Software Developer;</p>
                </header>

                <section className="about">
                    <h2>About Me</h2>
                    <p>
                        Welcome to my portfolio! I am a passionate web developer with a
                        focus on creating responsive and user-friendly applications.
                    </p>
                </section>

                <section className="projects">
                    <h2>Projects</h2>
                    <div className="project">
                        <h3>Project 1</h3>
                        <p>Description of Project 1.</p>
                    </div>
                    <div className="project">
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                    </div>
                    {/* Add more projects as needed */}
                </section>

                <section className="contact">
                    <h2>Contact Me</h2>
                    <p>Email: your.email@example.com</p>
                    <p>LinkedIn: linkedin.com/in/your-profile</p>
                    {/* Add more contact information as needed */}
                </section>
            </div>
        </div>
    );
}

export default App;
