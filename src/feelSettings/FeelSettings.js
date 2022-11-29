import React, { useState } from "react";
import './FeelSettings.css';
import Header from "../components/header/Header";
import Content from "./content/Content";



const FeelSettings = (props) => {

    return (
        <div className="MainPage">
            <Header />
            <Content 
                daysInMonth={props.daysInMonth}
                showCalendar={props.showCalendar}
                setShowCalendar={props.setShowCalendar}
                lineChartData={props.lineChartData}
                daysChartLabel={props.daysChartLabel}
                onSubmitAssesForm={props.onSubmitAssesForm}
                arrWithForms={props.arrWithForms}
            />
        </div>
    )
}

export default FeelSettings;