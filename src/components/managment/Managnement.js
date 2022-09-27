import React from "react";
import Control from "../control/Control";
import Statistic from "../statistic/Statistic";


const Management = () => {
    return (
        <div className="management">
            <Statistic />
            <div className="lane2"></div>
            <Control />
        </div>
    )
}

export default Management;