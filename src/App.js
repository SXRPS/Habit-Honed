import './App.css';
import {Circle} from "./Circle";
import {Square} from "./Square";
import {Triangle} from "./Triangle";
import {useState, useEffect} from "react";
import html2pdf from 'html2pdf.js';
import React from "react";
import HowToInfo from "./HowToInfo.js"

function App() {
    // Detect if screen is mobile-sized
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Set a threshold (e.g. 768px) for detecting "mobile"
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        // Check screen size on first load
        handleResize();

        // Listen for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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

    const [selectedFont, setSelectedFont] = useState("outfit");
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
            {/*
              Display a warning message if the user is on a narrow screen
              (at or below your chosen threshold, e.g., 768px).
            */}
            {isMobile && (
                <div className="mobileWarning">
                    <p>
                        It looks like you are viewing from a mobile device. For best results,
                        please use a computer or laptop.
                    </p>
                </div>
            )}

            <div className="dots"></div>
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
                        <input
                            type="radio"
                            value="default"
                            name="theme"
                            checked={selectedBg === "default"}
                            onChange={handleBgChange}
                        />
                        <img src="./No_icon_red.svg.png" className="iconRadio" alt="default theme"/>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="spring"
                            name="theme"
                            checked={selectedBg === "spring"}
                            onChange={handleBgChange}
                        />
                        <img src="./CBIcon.png" className="iconRadio" alt="spring theme"/>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="summer"
                            name="theme"
                            checked={selectedBg === "summer"}
                            onChange={handleBgChange}
                        />
                        <img src="./831682.png" className="iconRadio" alt="summer theme"/>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="fall"
                            name="theme"
                            checked={selectedBg === "fall"}
                            onChange={handleBgChange}
                        />
                        <img src="./leaves-autumn-icon-png.png" className="iconRadio" alt="fall theme"/>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="winter"
                            name="theme"
                            checked={selectedBg === "winter"}
                            onChange={handleBgChange}
                        />
                        <img src="./2530064.png" className="iconRadio" alt="winter theme"/>
                    </label>
                </div>

                <div className='theButtons'>
                    <div className='buttons'>
                        <div className="rowOne">
                            <div className='circles'>
                                <button
                                    onClick={() => setWeekOneCircles(prevState => prevState.slice(0, prevState.length - 1))}
                                    className="checkboxButtons"
                                >
                                    -
                                </button>
                                <Circle />
                                <button
                                    onClick={() => setWeekOneCircles([...weekOneCircles, (<Circle key={weekOneCircles.length} />)])}
                                    className="checkboxButtons"
                                >
                                    +
                                </button>
                            </div>
                            <div className='squares'>
                                <button
                                    onClick={() => setWeekOneSquares(prevState => prevState.slice(0, prevState.length - 1))}
                                    className="checkboxButtons"
                                >
                                    -
                                </button>
                                <Square />
                                <button
                                    onClick={() => setWeekOneSquares([...weekOneSquares, (<Square key={weekOneSquares.length} />)])}
                                    className="checkboxButtons"
                                >
                                    +
                                </button>
                            </div>
                            <div className='triangles'>
                                <button
                                    onClick={() => setWeekOneTriangles(prevState => prevState.slice(0, prevState.length - 1))}
                                    className="checkboxButtons"
                                >
                                    -
                                </button>
                                <Triangle />
                                <button
                                    onClick={() => setWeekOneTriangles([...weekOneTriangles, (<Triangle key={weekOneTriangles.length} />)])}
                                    className="checkboxButtons"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="rowTwo">
                            <div id='circles'>
                                <button
                                    onClick={() => setWeekTwoCircles(prevState => prevState.slice(0, prevState.length - 1))}
                                    className="checkboxButtons"
                                >
                                    -
                                </button>
                                <Circle />
                                <button
                                    onClick={() => setWeekTwoCircles([...weekTwoCircles, (<Circle key={weekTwoCircles.length} />)])}
                                    className="checkboxButtons"
                                >
                                    +
                                </button>
                            </div>
                            <div id='squares'>
                                <button
                                    onClick={() => setWeekTwoSquares(prevState => prevState.slice(0, prevState.length - 1))}
                                    className="checkboxButtons"
                                >
                                    -
                                </button>
                                <Square />
                                <button
                                    onClick={() => setWeekTwoSquares([...weekTwoSquares, (<Square key={weekTwoSquares.length} />)])}
                                    className="checkboxButtons"
                                >
                                    +
                                </button>
                            </div>
                            <div id='triangles'>
                                <button
                                    onClick={() => setWeekTwoTriangles(prevState => prevState.slice(0, prevState.length - 1))}
                                    className="checkboxButtons"
                                >
                                    -
                                </button>
                                <Triangle />
                                <button
                                    onClick={() => setWeekTwoTriangles([...weekTwoTriangles, (<Triangle key={weekTwoTriangles.length} />)])}
                                    className="checkboxButtons"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <table
                        id='habitPaper'
                        className='habitPaper'
                        style={{
                            backgroundImage: `url(${getBackgroundImage(selectedBg)})`,
                            fontFamily: getFont(selectedFont),
                            textAlign: selectedAlignment
                        }}
                    >
                        <tr className='legend'>
                            <td align='center'>
                                <h1>Habit</h1>
                                <h1>Tracker</h1>
                            </td>
                            <td align='center'>
                                <h1>Legend</h1>
                                <div align='left'>
                                    <label>
                                        <Circle />
                                        <input
                                            type='text'
                                            className='legend-input'
                                            placeholder='Read 10% of my book...'
                                            style={{fontFamily: getFont(selectedFont)}}
                                        />
                                    </label>
                                    <br/>
                                    <label>
                                        <Square />
                                        <input
                                            type='text'
                                            className='legend-input'
                                            placeholder='Journal one page...'
                                            style={{fontFamily: getFont(selectedFont)}}
                                        />
                                    </label>
                                    <br/>
                                    <label>
                                        <Triangle />
                                        <input
                                            type='text'
                                            className='legend-input'
                                            placeholder='Write habits here...'
                                            style={{fontFamily: getFont(selectedFont)}}
                                        />
                                    </label>
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
                        <select
                            value={selectedFont}
                            onChange={handleFontChange}
                            style={{fontFamily: getFont(selectedFont)}}
                        >
                            <option value="outfit">Outfit</option>
                            <option value="courier">Courier New</option>
                            <option value="arial">Arial</option>
                            <option value="timesNewRoman">Times New Roman</option>
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
                            <img src="./leftAlign.png" className="alignImages" alt="Left Align"/>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="center"
                                name="alignment"
                                checked={selectedAlignment === "center"}
                                onChange={handleAlignmentChange}
                            />
                            <img src="./centerAlign.png" className="alignImages" alt="Center Align"/>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="right"
                                name="alignment"
                                checked={selectedAlignment === "right"}
                                onChange={handleAlignmentChange}
                            />
                            <img src="./rightAlign.png" className="alignImages" alt="Right Align"/>
                        </label>
                        <div className="infoButton">
                            <a className="IB">
                                <img
                                    src="./info.png"
                                    alt="Info Icon"
                                    onClick={() => setButtonPopup(true)}
                                />
                            </a>
                            <HowToInfo trigger={buttonPopup} setTrigger={setButtonPopup} />
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
            return "Outfit";
        default:
            return "Outfit";
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