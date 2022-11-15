import React from "react";
import './FeelSettings.css';
import Header from "../components/header/Header";
import ChartForSettings from "./chartForSettings/ChartForSettings";


const FeelSettings = () => {

    let date = new Date();

    let dayInMonth = {
        January: 31,
        February: 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31,
    }

    function getDays(prop) {
        let arr = [];
        for (let i = 1; i <= prop; i++) {
            arr.push(i);
        }
        return arr;
    }

    let array = getDays(dayInMonth[date.toLocaleString('en-US', {month: 'long'})]);
     
    return (
        <div className="MainPage">
            <Header />
            <div className="background test">
                <ChartForSettings 
                    days={array} 
                    month={date.toLocaleString('en-US', {month: 'long'})}
                    year={date.getFullYear()}
                /> 
            </div>
        </div>
    )
}

export default FeelSettings;