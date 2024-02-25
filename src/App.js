import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="dots">

            </div>
                <header>
                    <h1>TheCultr;</h1>
                    <p>The Habit Tracking PDF Builder</p>
                    <input type="button" onClick="document.getElementById('middle').scrollIntoView('habitBuilder');" />
                </header>
            <div className={'habitBuilder'}>
                <p>Sup</p>
            </div>
        </div>
    );
}

export default App;
