import './App.css';
import {Circle} from "./Circle";
import {Square} from "./Square";
import {Triangle} from "./Triangle";
import {useState} from "react";


function App() {

    const [weekOneCircles, setWeekOneCircles] = useState([]);
    const [weekOneSquares, setWeekOneSquares] = useState([]);
    const [weekOneTriangles, setWeekOneTriangles] = useState([]);
    const [weekTwoCircles, setWeekTwoCircles] = useState([]);
    const [weekTwoSquares, setWeekTwoSquares] = useState([]);
    const [weekTwoTriangles, setWeekTwoTriangles] = useState([]);

    const scrollToHabitBuilder = () => {
        const habitBuilderElement = document.querySelector('.habitBuilder');
        habitBuilderElement.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="App">
            <div className="dots">

            </div>
            <header>
                <h1>Disciple'nd;</h1>
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
                <div className='theButtons'>
                    <div className='buttons'>
                        <div className="rowOne">
                            <div id='circles'>
                                <button
                                    onClick={() => setWeekOneCircles(prevState => prevState.slice(0, prevState.length - 1))}>-
                                </button>
                                <Circle></Circle>
                                <button onClick={() => setWeekOneCircles([...weekOneCircles, (<Circle></Circle>)])}>+
                                </button>
                            </div>
                            <div id='squares'>
                                <button
                                    onClick={() => setWeekOneSquares(prevState => prevState.slice(0, prevState.length - 1))}>-
                                </button>
                                <Square></Square>
                                <button onClick={() => setWeekOneSquares([...weekOneSquares, (<Square></Square>)])}>+
                                </button>
                            </div>
                            <div id='triangles'>
                                <button
                                    onClick={() => setWeekOneTriangles(prevState => prevState.slice(0, prevState.length - 1))}>-
                                </button>
                                <Triangle></Triangle>
                                <button onClick={() => setWeekOneTriangles([...weekOneTriangles, (
                                    <Triangle></Triangle>)])}>+
                                </button>
                            </div>
                        </div>
                        <div className="rowTwo">
                            <div id='circles'>
                                <button
                                    onClick={() => setWeekTwoCircles(prevState => prevState.slice(0, prevState.length - 1))}>-
                                </button>
                                <Circle></Circle>
                                <button onClick={() => setWeekTwoCircles([...weekTwoCircles, (<Circle></Circle>)])}>+
                                </button>
                            </div>
                            <div id='squares'>
                                <button
                                    onClick={() => setWeekTwoSquares(prevState => prevState.slice(0, prevState.length - 1))}>-
                                </button>
                                <Square></Square>
                                <button onClick={() => setWeekTwoSquares([...weekTwoSquares, (<Square></Square>)])}>+
                                </button>
                            </div>
                            <div id='triangles'>
                                <button
                                    onClick={() => setWeekTwoTriangles(prevState => prevState.slice(0, prevState.length - 1))}>-
                                </button>
                                <Triangle></Triangle>
                                <button onClick={() => setWeekTwoTriangles([...weekTwoTriangles, (
                                    <Triangle></Triangle>)])}>+
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className='habitPaper'>
                        <tr className='legend'>
                            <td align='center'>
                                <h1>Habit</h1>
                                <h1>Tracker</h1>
                            </td>
                            <td align='center'>
                                <h1>Legend:</h1>
                                <div align='left'>
                                    <label>&#9711;:<input type='text' className='legend-input'
                                                          placeholder='Read 10% of my book...'/></label>
                                    <br/>
                                    <label>&#9744;:<input type='text' className='legend-input'
                                                          placeholder='Journal one page...'/></label>
                                    <br/>
                                    <label>&#9651;:<input type='text' className='legend-input'
                                                          placeholder='Write habits here...'/></label>
                                </div>
                            </td>
                        </tr>
                        <tr className='weeks'>
                            <td id='weekOne'>
                                <h1>Day One:</h1>
                                <div className='habit-row'>
                                    {weekOneCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekOneSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekOneTriangles}
                                </div>
                            </td>
                            <td>
                                <h1>Day Eight:</h1>
                                <div className='habit-row'>
                                    {weekTwoCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoTriangles}
                                </div>
                            </td>
                        </tr>
                        <tr className='weeks'>
                            <td id='weekOne'>
                                <h1>Day Two:</h1>
                                <div className='habit-row'>
                                    {weekOneCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekOneSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekOneTriangles}
                                </div>
                            </td>
                            <td id='weekTwo'>
                                <h1>Day Nine:</h1>
                                <div className='habit-row'>
                                    {weekTwoCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoTriangles}
                                </div>
                            </td>
                        </tr>
                        <tr className='weeks'>
                            <td id='weekOne'>
                                <h1>Day Three:</h1>
                                <div className='habit-row'>
                                    {weekOneCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekOneSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekOneTriangles}
                                </div>
                            </td>
                            <td id='weekTwo'>
                                <h1>Day Ten:</h1>
                                <div className='habit-row'>
                                    {weekTwoCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoTriangles}
                                </div>
                            </td>
                        </tr>
                        <tr className='weeks'>
                            <td id='weekOne'>
                                <h1>Day Four:</h1>
                                <div className='habit-row'>
                                    {weekOneCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekOneSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekOneTriangles}
                                </div>
                            </td>
                            <td id='weekTwo'>
                                <h1>Day Eleven:</h1>
                                <div className='habit-row'>
                                    {weekTwoCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoTriangles}
                                </div>
                            </td>
                        </tr>
                        <tr className='weeks'>
                            <td id='weekOne'>
                                <h1>Day Five:</h1>
                                <div className='habit-row'>
                                    {weekOneCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekOneSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekOneTriangles}
                                </div>
                            </td>
                            <td id='weekTwo'>
                                <h1>Day Twelve:</h1>
                                <div className='habit-row'>
                                    {weekTwoCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoTriangles}
                                </div>
                            </td>
                        </tr>
                        <tr className='weeks'>
                            <td id='weekOne'>
                                <h1>Day Six:</h1>
                                <div className='habit-row'>
                                    {weekOneCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekOneSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekOneTriangles}
                                </div>
                            </td>
                            <td id='weekTwo'>
                                <h1>Day Thirteen:</h1>
                                <div className='habit-row'>
                                    {weekTwoCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoTriangles}
                                </div>
                            </td>
                        </tr>
                        <tr className='weeks'>
                            <td id='weekOne'>
                                <h1>Day Seven:</h1>
                                <div className='habit-row'>
                                    {weekOneCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekOneSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekOneTriangles}
                                </div>
                            </td>
                            <td id='weekTwo'>
                                <h1>Day Fourteen:</h1>
                                <div className='habit-row'>
                                    {weekTwoCircles}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoSquares}
                                </div>
                                <div className='habit-row'>
                                    {weekTwoTriangles}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default App;
