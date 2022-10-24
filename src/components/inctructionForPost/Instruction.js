import React, {useState} from "react";
import './Instruction.css';
import DaySelect from "../dataForPost/DaySelect";
import MonthSelect from "../dataForPost/MonthSelect";
import RadioButtons from "../typePublications/radioButtons";

const Instructions = (props) => {

    return (
        <div className="instructions">
            <RadioButtons onChange={props.typePublication} valueIsPrivate={props.form.isPrivate}/>
            <div className="data-wrapper">
                <DaySelect valueFormDay={props.form.day} valueFormMonth={props.form.month} onChange={props.selectDay}/>
                <MonthSelect valueFormMonth={props.form.month} onChange={props.selectMonth}/>
            </div>    
        </div>
    )
}


export default Instructions;