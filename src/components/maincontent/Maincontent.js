import React, { Component } from "react";
import Chart from "../chart/Chart";
import Management from "../managment/Managnement";
import PostsFeed from "../postsFeed/postsFeed";
import './Maincontent.css';

const Maincontent = (props) => {
    return (
        <div className="maincontent">
            <div className="background">
                <Chart />
                <Management onClick={props.onClick}/>
            </div>
            <PostsFeed />
        </div>
    )
}



export default Maincontent;