import React, { Component } from "react";
import Chart from "../chart/Chart";
import Management from "../managment/Managnement";
import './Maincontent.css';

const Maincontent = () => {
    return (
        <div className="maincontent background">
            <Chart />
            <Management />
        </div>
    )
}



export default Maincontent;