import './App.css';
import {Circle} from "./Circle";
import {Square} from "./Square";
import {Triangle} from "./Triangle";
import {useState} from "react";
import html2pdf from 'html2pdf.js';
import React from "react";
import HowToInfo from "./HowToInfo.js"

function App() {

    const [weekOneCircles, setWeekOneCircles] = useState([]);
    const [weekOneSquares, setWeekOneSquares] = useState([]);
    const [weekOneTriangles, setWeekOneTriangles] = useState([]);
    const [weekTwoCircles, setWeekTwoCircles] = useState([]);
    const [weekTwoSquares, setWeekTwoSquares] = useState([]);
    const [weekTwoTriangles, setWeekTwoTriangles] = useState([]);
    const [selectedBg, setSelectedBg] = useState(['default']);

    const handleBgChange = (event) => {
        setSelectedBg(event.target.value);
    };

    const [selectedFont, setSelectedFont] = useState("courier");
    const handleFontChange = (event) => {
        setSelectedFont(event.target.value);
    };

    // State for selected text alignment
    const [selectedAlignment, setSelectedAlignment] = useState('left');

    // Function to handle changes in text alignment
    const handleAlignmentChange = (event) => {
        setSelectedAlignment(event.target.value);
    };

    const scrollToHabitBuilder = () => {
        const habitBuilderElement = document.querySelector('.habitBuilder');
        habitBuilderElement.scrollIntoView({behavior: 'smooth'});
    };

    const handleLegendShapes = () => {
        if  (document.getElementsByClassName('weeks').innerHTML == '.circled') {
            document.getElementsByClassName('legend').innerHTML = '<label><Circle></Circle><input type=\'text\' className=\'legend-input\' placeholder=\'Read 10% of my book...\' style={{fontFamily: getFont(selectedFont)}}/></label>\n' +
                '<br/>';
        }
    }

    const saveAsPdf = () => {
        const element = document.getElementById('habitPaper');
        const opt = {
            margin:       0,
            padding:      0,
            filename:     'HabitTracker.pdf',
            image:        { type: 'pdf', quality: 1},
            html2canvas:  { scale: 3 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        html2pdf().from(element).set(opt).save();
    };

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="App">
            <div className="dots">
            </div>
            <header>
                <h1>Habit-Honed</h1>
                <p>Habit Tracker PDF Builder</p>
                <div className="references">
                <p className="subtitle">Take your habits two weeks at a time</p>
                </div>
                <button onClick={scrollToHabitBuilder}>&#8595;</button>
            </header>

            <div className='habitBuilder'>
                <div className='themes' align='center' width='device-screen-width'>

                    <label>
                        <input type="radio" value="default" name="theme" checked={selectedBg === "default"}
                               onChange={handleBgChange}/>
                        <img src="./No_icon_red.svg.png" className="iconRadio"/>
                    </label>
                    <label>
                        <input type="radio" value="spring" name="theme" checked={selectedBg === "spring"}
                               onChange={handleBgChange}/>
                        <img src="./CBIcon.png" className="iconRadio"/>
                    </label>
                    <label>
                        <input type="radio" value="summer" name="theme" checked={selectedBg === "summer"}
                               onChange={handleBgChange}/>
                        <img src="./831682.png" className="iconRadio"/>
                    </label>
                    <label>
                        <input type="radio" value="fall" name="theme" checked={selectedBg === "fall"}
                               onChange={handleBgChange}/>
                        <img src="./leaves-autumn-icon-png.png" className="iconRadio"/>
                    </label>
                    <label>
                        <input type="radio" value="winter" name="theme" checked={selectedBg === "winter"}
                               onChange={handleBgChange}/>
                        <img src="./2530064.png" className="iconRadio"/>
                    </label>

                </div>
                <div className='theButtons'>
                    <div className='buttons'>
                        <div className="rowOne">
                            <div className='circles'>
                                <button onClick={() => setWeekOneCircles(prevState => prevState.slice(0, prevState.length - 1))} className="checkboxButtons">-
                                </button>
                                <Circle></Circle>
                                <button onClick={() => setWeekOneCircles([...weekOneCircles, (<Circle></Circle>)])} className="checkboxButtons">+
                                </button>
                            </div>
                            <div className='squares'>
                                <button onClick={() => setWeekOneSquares(prevState => prevState.slice(0, prevState.length - 1))} className="checkboxButtons">-
                                </button>
                                <Square></Square>
                                <button onClick={() => setWeekOneSquares([...weekOneSquares, (<Square></Square>)])} className="checkboxButtons">+
                                </button>
                            </div>
                            <div className='triangles'>
                                <button onClick={() => setWeekOneTriangles(prevState => prevState.slice(0, prevState.length - 1))} className="checkboxButtons">-
                                </button>
                                <Triangle></Triangle>
                                <button onClick={() => setWeekOneTriangles([...weekOneTriangles, (<Triangle></Triangle>)])} className="checkboxButtons">+
                                </button>
                            </div>
                        </div>
                        <div className="rowTwo">
                            <div id='circles'>
                                <button
                                    onClick={() => setWeekTwoCircles(prevState => prevState.slice(0, prevState.length - 1))} className="checkboxButtons">-
                                </button>
                                <Circle></Circle>
                                <button onClick={() => setWeekTwoCircles([...weekTwoCircles, (<Circle></Circle>)])} className="checkboxButtons">+
                                </button>
                            </div>
                            <div id='squares'>
                                <button
                                    onClick={() => setWeekTwoSquares(prevState => prevState.slice(0, prevState.length - 1))} className="checkboxButtons">-
                                </button>
                                <Square></Square>
                                <button onClick={() => setWeekTwoSquares([...weekTwoSquares, (<Square></Square>)])} className="checkboxButtons">+
                                </button>
                            </div>
                            <div id='triangles'>
                                <button
                                    onClick={() => setWeekTwoTriangles(prevState => prevState.slice(0, prevState.length - 1))} className="checkboxButtons">-
                                </button>
                                <Triangle></Triangle>
                                <button onClick={() => setWeekTwoTriangles([...weekTwoTriangles, (<Triangle></Triangle>)])} className="checkboxButtons">+
                                </button>
                            </div>
                        </div>
                    </div>
                    <table id='habitPaper' className='habitPaper' style={{backgroundImage: `url(${getBackgroundImage(selectedBg)})`, fontFamily: getFont(selectedFont), textAlign: selectedAlignment}}>
                        <tr className='legend'>
                            <td align='center'>
                                <h1>Habit</h1>
                                <h1>Tracker</h1>
                            </td>
                            <td align='center'>
                                <h1>Legend</h1>
                                <div align='left'>
                                    <label><Circle></Circle><input type='text' className='legend-input' placeholder='Read 10% of my book...' style={{fontFamily: getFont(selectedFont)}}/></label>
                                    <br/>
                                    <label><Square></Square><input type='text' className='legend-input' placeholder='Journal one page...' style={{fontFamily: getFont(selectedFont)}}/></label>
                                    <br/>
                                    <label><Triangle></Triangle><input type='text' className='legend-input' placeholder='Write habits here...' style={{fontFamily: getFont(selectedFont)}}/></label>
                                </div>
                            </td>
                        </tr>
                        <tr className='weeks'>
                            <td id='weekOne'>
                                <h1>Monday</h1>
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
                                <h1>Monday</h1>
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
                            <td>
                                <h1>Tuesday</h1>
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
                                <h1>Tuesday</h1>
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
                                <h1>Wednesday</h1>
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
                                <h1>Wednesday</h1>
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
                                <h1>Thursday</h1>
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
                                <h1>Thursday</h1>
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
                                <h1>Friday</h1>
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
                                <h1>Friday</h1>
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
                                <h1>Saturday</h1>
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
                                <h1>Saturday</h1>
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
                                <h1>Sunday</h1>
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
                                <h1>Sunday</h1>
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
                    <div className="fontMenu">
                        <p>Font & Margin</p>
                        <select value={selectedFont} onChange={handleFontChange} style={{fontFamily: getFont(selectedFont)}}>
                            <option value="courier">Courier New</option>
                            <option value="arial">Arial</option>
                            <option value="timesNewRoman">Times New Roman</option>
                            <option value="outfit">Outfit</option>
                        </select>
                        <br/>
                        <label>
                            <input
                                type="radio"
                                value="left"
                                name="alignment"
                                checked={selectedAlignment === "left"}
                                onChange={handleAlignmentChange}
                            />
                            <img src="./leftAlign.png" className="alignImages"/>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="center"
                                name="alignment"
                                checked={selectedAlignment === "center"}
                                onChange={handleAlignmentChange}
                            />
                            <img src="./centerAlign.png" className="alignImages"/>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="right"
                                name="alignment"
                                checked={selectedAlignment === "right"}
                                onChange={handleAlignmentChange}
                            />
                            <img src="./rightAlign.png" className="alignImages"/>
                        </label>
                        <div className="infoButton">
                            <a className="IB"><img src="./info.png" onClick={() => setButtonPopup(true)}/></a>
                            <HowToInfo trigger={buttonPopup} setTrigger={setButtonPopup}>
                            </HowToInfo>
                        </div>
                    </div>

                </div>
                <div className="PDFButton">
                    <button className="downloadPdf" onClick={saveAsPdf}>Download PDF</button>
                </div>
            </div>
        </div>
    );
}

function getFont(selectedFont) {
    switch (selectedFont) {
        case 'courier':
            return "Courier New";

        case 'arial':
            return "Arial";

        case 'timesNewRoman':
            return "Times New Roman";


        case 'outfit':
            return "Outfit"

        default:
            return "Courier New";
    }
}

function getBackgroundImage(selectedBg) {
    switch (selectedBg) {
        case 'default':
            return "default";

        case 'spring':
            return "./Cherry_Blossom_Background.png";

        case 'summer':
            return "./summerbg.webp";

        case 'fall':
            return "./FallBg.png";

        case 'winter':
            return "./WinterBg.png";

        default:
            return 'none'; // Default background
    }
}

export default App;