import React from "react";
import './Statistic.css';

const Statistic = () => {
    return (
        <div className="statistic">
            <div className="followers bgstat">Followers: 456</div>
            <div className="following bgstat">Following: 244</div>
            <div className="empathy bgstat">Empathy: 1153</div>
        </div>
    )
}

export default Statistic;