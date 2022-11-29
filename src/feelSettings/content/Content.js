import React, { useEffect, useState } from "react";
import './Content.css';
import ChartAndPosts from "../ChartAndPosts/ChartAndPosts";
import Sidebar from "../sidebarFeelPage/Sidebar";


const Content = (props) => {

    const [dataForPostsFeed, setDataForPostsFeed] = useState(new Date().getDate())


    return (
        <div className="content">
            <Sidebar
                setDataForPostsFeed={setDataForPostsFeed} 
                showCalendar={props.showCalendar}
                setShowCalendar={props.setShowCalendar}
                daysInMonth={props.daysInMonth}
                onSubmitAssesForm={props.onSubmitAssesForm}
            />
            <ChartAndPosts
                setDataForPostsFeed={setDataForPostsFeed}
                dataForPostsFeed={dataForPostsFeed}
                lineChartData={props.lineChartData} 
                daysChartLabel={props.daysChartLabel}
                arrWithForms={props.arrWithForms}
            />
        </div>
    )
}

export default Content;