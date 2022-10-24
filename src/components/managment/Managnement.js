import React from "react";
import Control from "../control/Control";
import Statistic from "../statistic/Statistic";


const Management = (props) => {
    return (
        <div className="management">
            <Statistic allEmpathy={props.allEmpathy} />
            <div className="lane2"></div>
            <Control onClick={props.onClick}/>
        </div>
    )
}

export default Management;