import React from 'react'
import "./HowToInfo.css"

function HowToInfo(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>&times;</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default HowToInfo