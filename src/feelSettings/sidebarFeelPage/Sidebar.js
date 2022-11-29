import React, { useState } from "react";
import './Sidebar.css'
import Calendar from "../calendar/Calendar";
import AssesTheFeel from "../assesTheFeel/AssesTheFeel";

const Sidebar = (props) => {

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
        props.setDataForPostsFeed(new Date(new Date().getFullYear(), new Date().getMonth(), dayForData).getDate())
    }

    return (
        <div className=".sidebarOnFeelPage">
            {
                props.showCalendar ? 
                <Calendar 
                    daysInMonth={props.daysInMonth}
                    ChooseDataForAsses={ChooseDataForAsses}
                    dayAsses={dataAsses.day}
                />
                :
                <AssesTheFeel 
                    setShowCalendar={props.setShowCalendar}
                    onSubmitAssesForm={props.onSubmitAssesForm}
                    dayAsses={dataAsses.day}
                    monthAsses={dataAsses.month}
                />
            }
        </div>
    )
}

export default Sidebar;