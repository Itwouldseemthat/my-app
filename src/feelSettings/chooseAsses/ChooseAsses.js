import React from "react";
import './ChooseAsses.css';

const ChooseAsses = (props) => {


    return (
        <div className="radio-asses">
            <label className="labelAsses">
                <input 
                    type="radio" 
                    name="asses"
                    className="btnAsses"
                    value={props.asses}
                    onChange={() => props.onChange(5)}
                />
                <span>Otlichno</span>
            </label>
            <label className="labelAsses">
                <input 
                    type="radio" 
                    name="asses"
                    className="btnAsses"
                    value={props.asses}
                    onChange={() => props.onChange(4)}
                />
                <span>good</span>
            </label>
            <label className="labelAsses">
                <input
                    type="radio" 
                    name="asses"
                    className="btnAsses"
                    value={props.asses}
                    onChange={() => props.onChange(3)}
                />
                <span>apatiya</span>
            </label>
            <label className="labelAsses">
                <input 
                    type="radio" 
                    name="asses"
                    className="btnAsses"
                    value={props.asses}
                    onChange={() => props.onChange(2)}
                />
                <span>not good</span>
            </label>
            <label className="labelAsses">
                <input 
                    type="radio" 
                    name="asses"
                    className="btnAsses"
                    value={props.asses}
                    onChange={() => props.onChange(1)}
                />
                <span>i wanna die</span>
            </label>
        </div>
    )
}

export default ChooseAsses;