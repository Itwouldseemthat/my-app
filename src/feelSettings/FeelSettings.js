import React, { useState } from "react";
import './FeelSettings.css';
import Header from "../components/header/Header";
import Content from "./content/Content";
import Calendar from "./calendar/Calendar";


const FeelSettings = (props) => {

    const [dataAsses, setDataAsses] = useState(
        {
            day: new Date().getDate(),
            month: new Date().toLocaleString('en-US', {month: 'long'}),
        }
    )

    function ChooseDataForAsses(elem) {
        let dayForData = elem.target.getAttribute('value');
        setDataAsses({
            ...dataAsses,
            day: dayForData,
        })
    }

    return (
        <div className="MainPage">
            <Header />
            <Content 
                dayAsses={dataAsses.day}
                monthAsses={dataAsses.month}
                lineChartData={props.lineChartData}
                onSubmitAssesForm={props.onSubmitAssesForm}
            />
            <Calendar 
                ChooseDataForAsses={ChooseDataForAsses}
                dayAsses={dataAsses.day}
            />
        </div>
    )
}

export default FeelSettings;