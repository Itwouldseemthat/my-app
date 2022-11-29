import React from "react";
import ChartForSettings from "../chartForSettings/ChartForSettings";
import PostsOnChosenDay from "../PostsOnChosenDay/PostsOnChosenDay";

const ChartAndPosts = (props) => {

    let date = new Date();

    return (
        <div className="chartAndPosts test">
            <ChartForSettings 
                // arrWithForms={props.arrWithForms}
                // filteredForms={props.filteredForms}
                dataForPostsFeed={props.dataForPostsFeed}
                setDataForPostsFeed={props.setDataForPostsFeed}
                month={date.toLocaleString('en-US', {month: 'long'})}
                year={date.getFullYear()}
                datasets={props.datasets}
                lineChartData={props.lineChartData}
                daysChartLabel={props.daysChartLabel}
            /> 
            <PostsOnChosenDay 
                arrWithForms={props.arrWithForms}
                dataForPostsFeed={props.dataForPostsFeed}
            />
        </div>
    )
}

export default ChartAndPosts;