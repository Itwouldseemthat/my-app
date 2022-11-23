import React, { useState } from "react";
import './AssesTheFeel.css';
import ChooseAsses from "../chooseAsses/ChooseAsses";


const AssesTheFeel = (props) => {

    const [asses, setAsses] = useState()

    function ConfirmAsses(num) {
        setAsses(num);
        console.log(asses);
    }

    return (
        <div className="background assesBlock">
            <div className="date">
                <a className="title-asses">How did you feel on</a>
                <a className="title-asses">{props.monthAsses} {props.dayAsses}?</a>
            </div>
            <form className="asses" onSubmit={(event) => props.onSubmitAssesForm(event, asses)}>
                <ChooseAsses onChange={ConfirmAsses} asses={asses}/>
                <input type='submit' value='confirm' className="addPostBtn" />
            </form>
        </div>
    )
}

export default AssesTheFeel;