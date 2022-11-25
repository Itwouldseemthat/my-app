import React, { useState } from "react";
import './Content.css';
import AssesTheFeel from "../assesTheFeel/AssesTheFeel";
import ChartAndPosts from "../ChartAndPosts/ChartAndPosts";
import Calendar from '../calendar/Calendar';


const Content = (props) => {

    const [dataAsses, setDataAsses] = useState(
        {
            day: new Date().getDate(),
            month: new Date().toLocaleString('en-US', {month: 'long'}),
        }
    )

    function ChooseDataForAsses(elem) {
        console.log(elem.target)
        let dayForData = elem.target.getAttribute('value');
        setDataAsses({
            ...dataAsses,
            day: dayForData,
        })
        props.setShowCalendar(false)
    }

    

    return (
        <div className="content">
            {props.showCalendar ? 
            <Calendar 
                daysInMonth={props.daysInMonth}
                ChooseDataForAsses={ChooseDataForAsses}
                dayAsses={dataAsses.day}
            />
            :
            <AssesTheFeel 
                onSubmitAssesForm={props.onSubmitAssesForm}
                dayAsses={dataAsses.day}
                monthAsses={dataAsses.month}
            />
            }
            <ChartAndPosts lineChartData={props.lineChartData} daysChartLabel={props.daysChartLabel}/>
        </div>
    )
}

export default Content;