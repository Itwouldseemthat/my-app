import React, { Component, useState } from "react";
import Chart from "../chart/Chart";
import Management from "../managment/Managnement";
import PostsFeed from "../postsFeed/postsFeed";
import './Maincontent.css';
import noneLiked from '../../icons/love.png';
import liked from '../../icons/heart.png';

const Maincontent = (props) => {

    const [allEmpathy, setAllEmpathy] = useState(0)

    let count = allEmpathy;

    function addPointToAllEmpathy(icon) {
        if (icon === noneLiked) {
            count += 1;
            setAllEmpathy(count);
        }
        else if (icon === liked) {
            count -= 1;
            setAllEmpathy(count);
        }
    }


    return (
        <div className="maincontent">
            <div className="background">
                <Chart lineChartData={props.lineChartData} daysChartLabel={props.daysChartLabel}/>
                <Management 
                    showCreatePostModal={props.showCreatePostModal} 
                    allEmpathy={allEmpathy}
                    arrWithForms={props.arrWithForms}
                />
            </div>
            <PostsFeed 
                arrWithForms={props.arrWithForms}
                addPointToAllEmpathy={addPointToAllEmpathy}
            />
        </div>
    )
}



export default Maincontent;