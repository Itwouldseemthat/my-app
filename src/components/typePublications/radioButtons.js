import React from "react";


const RadioButtons = (props) => {
    return (
        <div className="radio-wrapper">
            <label>
                <input 
                    type="radio" 
                    name="typePublication"
                    className="radio-btn"
                    id="private"
                    value={props.valueIsPrivate}
                    onChange={() => props.onChange(true)}
                />
            Private
            </label>
            <label>
                <input 
                    type="radio" 
                    name="typePublication"
                    className="radio-btn"
                    id="public"
                    value={props.valueIsPrivate}
                    onChange={() => props.onChange(false)}
                />
            Public
            </label>
        </div>
    )
}

export default RadioButtons;