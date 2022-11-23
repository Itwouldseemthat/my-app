import React from "react";
import './Content.css';
import AssesTheFeel from "../assesTheFeel/AssesTheFeel";
import ChartAndPosts from "../ChartAndPosts/ChartAndPosts";


const Content = (props) => {

    

    return (
        <div className="content">
            <AssesTheFeel 
                onSubmitAssesForm={props.onSubmitAssesForm}
                dayAsses={props.dayAsses}
                monthAsses={props.monthAsses}
            />
            <ChartAndPosts lineChartData={props.lineChartData}/>
        </div>
    )
}

export default Content;