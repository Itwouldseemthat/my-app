import React from "react";
import ChartForSettings from "../chartForSettings/ChartForSettings";

const ChartAndPosts = (props) => {

    let date = new Date();

    return (
        <div className="chartAndPosts background test">
            <ChartForSettings 
                month={date.toLocaleString('en-US', {month: 'long'})}
                year={date.getFullYear()}
                datasets={props.datasets}
                lineChartData={props.lineChartData}
                daysChartLabel={props.daysChartLabel}
            /> 
        </div>
    )
}

export default ChartAndPosts;