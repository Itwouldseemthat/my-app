import React, { useState } from "react";
import './AssesTheFeel.css';
import ChooseAsses from "../chooseAsses/ChooseAsses";


const AssesTheFeel = (props) => {

    const [asses, setAsses] = useState()

    const [isDisabled, setIsDisabled] = useState(true)

    function ConfirmAsses(num) {
        setAsses(num);
        console.log(asses);
        setIsDisabled(false);
    }

    function backToCalendar() {
        props.setShowCalendar(true)
    }



    return (
        <div className="background assesBlock">
            <div className="date">
                <a className="title-asses">How did you feel on</a>
                <a className="title-asses">{props.monthAsses} {props.dayAsses}?</a>
            </div>
            <form className="asses" onSubmit={(event) => props.onSubmitAssesForm(event, asses, props.dayAsses)}>
                <ChooseAsses onChange={ConfirmAsses} asses={asses}/>
                <input type='submit' value='confirm' className="addPostBtn" disabled={isDisabled}/>
            </form>
            <button type="submit" className="backToCalendar" onClick={backToCalendar}>back</button>
        </div>
    )
}

export default AssesTheFeel;