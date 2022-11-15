import React, { useState } from "react";
import './Content.css';
import AssesTheFeel from "../assesTheFeel/AssesTheFeel";
import ChartAndPosts from "../ChartAndPosts/ChartAndPosts";


const Content = () => {

    const [arrWithAsses, setArrWithAsses] = useState([]);

    function addPointToDataChart(event, asses) {
        event.preventDefault();
        arrWithAsses.push(asses);
        setArrWithAsses(arrWithAsses);
        console.log(arrWithAsses);
    }

    return (
        <div className="content">
            <AssesTheFeel onSubmit={addPointToDataChart}/>
            <ChartAndPosts />
        </div>
    )
}

export default Content;