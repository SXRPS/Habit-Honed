
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
                <h1>Disciple'n;</h1>
                <p>The Habit Tracker PDF Builder</p>
                <button onClick={scrollToHabitBuilder}>&#9660;</button>
            </header>
            <div className='habitBuilder'>
                <label>Themes:
                    <input type="radio" id="default" name="theme"/>
                    <input type="radio" id="spring" name="theme"/>
                    <input type="radio" id="summer" name="theme"/>
                    <input type="radio" id="fall" name="theme"/>
                    <input type="radio" id="winter" name="theme"/>
                </label>
                <div className='habitPaper'>
                    <div id='dayOne' className="weekOne">
                        <h1>Day One:</h1>
                    </div>
                    <div id='dayEight' className="weekOne"><h1>Day Eight:</h1></div>
                    <div id='dayTwo' className="weekOne"><h1>Day Two:</h1></div>
                    <div id='dayNine' className="weekOne"><h1>Day Nine:</h1></div>
                    <div id='dayThree' className="weekOne"><h1>Day Three:</h1></div>
                    <div id='dayTen' className="weekOne"><h1>Day Ten:</h1></div>
                    <div id='dayFour' className="weekOne"><h1>Day Four:</h1></div>

                    <div id='dayEleven' className="weekTwo"><h1>Day Eleven:</h1></div>
                    <div id='dayTwelve' className="weekTwo"><h1>Day Twelve:</h1></div>
                    <div id='dayFive' className="weekTwo"><h1>Day Five:</h1></div>
                    <div id='dayThirteen' className="weekTwo"><h1>Day Thirteen:</h1></div>
                    <div id='daySix' className="weekTwo"><h1>Day Six:</h1></div>
                    <div id='dayFourteen' className="weekTwo"><h1>Day Fourteen:</h1></div>
                    <div id='daySeven' className="weekTwo"><h1>Day Seven:</h1></div>
                </div>

                <p>End</p>
            </div>
            <div className='buttons'>
                <div className="rowOne">
                <div id='circles'>
                    <button>-</button>
                    <span className="circled">&#9711;</span>
                    <button>+</button>
                </div>
                <div id='squares'>
                    <button>-</button>
                    <span className="squared">&#9744;</span>
                    <button>+</button>
                </div>
                <div id='triangles'>
                    <button>-</button>
                    <span className="triangled">&#9651;</span>
                    <button>+</button>
                </div>
            </div>
                <div className="rowTwo">
                    <div id='circles'>
                        <button>-</button>
                        <span className="circled">&#9711;</span>
                        <button>+</button>
                    </div>
                    <div id='squares'>
                        <button>-</button>
                        <span className="squared">&#9744;</span>
                        <button>+</button>
                    </div>
                    <div id='triangles'>
                        <button>-</button>
                        <span className="triangled">&#9651;</span>
                        <button>+</button>
                    </div>
                </div>


                </div>
            </div>

    );
}

export default App;
