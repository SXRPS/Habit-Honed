import React from 'react';
import './App.css';

function App() {

    const scrollToHabitBuilder = () => {
        const habitBuilderElement = document.querySelector('.habitBuilder');
        habitBuilderElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">
            <div className="dots">

            </div>
            <header>
                <h1>TheDisciple'n;</h1>
                <p>The Habit Tracking PDF Builder</p>
                <button onClick={scrollToHabitBuilder}>&#9660;</button>
            </header>
            <div className={'habitBuilder'}>
                <label>Themes:
                    <input type="radio" id="spring" name="theme"/>
                    <input type="radio" id="summer" name="theme"/>
                    <input type="radio" id="fall" name="theme"/>
                    <input type="radio" id="winter" name="theme"/>
                </label>
                <section className={'habitPaper'}>
                    <div className='dayOne'></div>
                    <div className='dayTwo'></div>
                    <div className='dayThree'></div>
                    <div className='dayFour'></div>
                    <div className='dayFive'></div>
                    <div className='daySix'></div>
                    <div className='daySeven'></div>

                    <div className='dayEight'></div>
                </section>
                <p>End</p>
            </div>
        </div>
    );
}

export default App;
