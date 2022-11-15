import React from "react";
import './ChooseAsses.css';

const ChooseAsses = (props) => {
    return (
        <div className="radio-asses">
            <label>
                <input 
                    type="radio" 
                    name="asses"
                    className="radio-btn"
                    value={props.asses}
                    onChange={() => props.onChange(5)}
                />
            Otlichno
            </label>
            <label>
                <input 
                    type="radio" 
                    name="asses"
                    className="radio-btn"
                    value={props.asses}
                    onChange={() => props.onChange(4)}
                />
            good
            </label>
            <label>
                <input 
                    type="radio" 
                    name="asses"
                    className="radio-btn"
                    value={props.asses}
                    onChange={() => props.onChange(3)}
                />
            apatiya
            </label>
            <label>
                <input 
                    type="radio" 
                    name="asses"
                    className="radio-btn"
                    value={props.asses}
                    onChange={() => props.onChange(2)}
                />
            not good
            </label>
            <label>
                <input 
                    type="radio" 
                    name="asses"
                    className="radio-btn"
                    value={props.asses}
                    onChange={() => props.onChange(1)}
                />
            i wanna die
            </label>
        </div>
    )
}

export default ChooseAsses;