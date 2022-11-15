import React, { useState } from "react";
import ChooseAsses from "../chooseAsses/ChooseAsses";


const AssesTheFeel = (props) => {

    const [asses, setAsses] = useState()

    function ConfirmAsses(num) {
        setAsses(num);
        console.log(asses);
    }

    return (
        <div className="background">
            <div className="date">How did you feel on September 13?</div>
            <form className="asses" onSubmit={(event) => props.onSubmit(event, asses)}>
                <ChooseAsses onChange={ConfirmAsses} asses={asses}/>
                <input type='submit' value='confirm' className="addPostBtn" />
            </form>
        </div>
    )
}

export default AssesTheFeel;