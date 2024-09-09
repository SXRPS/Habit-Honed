import React, { useState, useEffect } from 'react';
import "./HowToInfo.css";

function HowToInfo(props) {
    const [activeSection, setActiveSection] = useState('section1'); // Set the initial active section

    const toggleSection = (section) => {
        if (activeSection !== section) {
            setActiveSection(section); // Only open the selected section if it's not already open
        }
    };

    // Automatically click the first button when the popup opens
    useEffect(() => {
        if (props.trigger) {
            setActiveSection('section1'); // Open the first section automatically
        }
    }, [props.trigger]);

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>&times;</button>
                <h2>How Does This Work?</h2>
                {/* Buttons to select sections */}
                <div className="button-group">
                    <button
                        className={`steps-btn ${activeSection === 'section1' ? 'flipped' : ''}`}
                        onClick={() => toggleSection('section1')}
                    >
                        &#9660;
                    </button>
                    <button
                        className={`steps-btn ${activeSection === 'section2' ? 'flipped' : ''}`}
                        onClick={() => toggleSection('section2')}
                    >
                        &#9660;
                    </button>
                    <button
                        className={`steps-btn ${activeSection === 'section3' ? 'flipped' : ''}`}
                        onClick={() => toggleSection('section3')}
                    >
                        &#9660;
                    </button>
                </div>

                {/* Conditional rendering of sections with animation */}
                {activeSection === 'section1' && (
                    <div className="section animated-section">
                        <p>Utilizing the buttons located on the left-hand side of the page, you may add and subtract shaped checkboxes to week one and two of your habit sheet.</p>
                        <img src="./sideButtons.png" className="popup-img" />
                        <p>Choose from four themes through all seasons of the year!</p>
                        <img src="./popup-themes-img.png" className="themes-img" />
                    </div>
                )}
                {activeSection === 'section2' && (
                    <div className="section animated-section">
                        <p className="section2-p">Would you like to build a habit of drinking more water, or maybe journal more?</p>
                        <p className="section2-p">Here's how that can look:</p>
                        <img src="./HabitTracker.png" className="tracker-img" />
                    </div>
                )}
                {activeSection === 'section3' && (
                    <div className="section animated-section">
                        Content for Section 3
                    </div>
                )}

                {props.children}
            </div>
        </div>
    ) : "";
}

export default HowToInfo;