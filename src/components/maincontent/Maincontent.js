import React, { Component } from "react";
import Chart from "../chart/Chart";
import Management from "../managment/Managnement";
import PostsFeed from "../postsFeed/postsFeed";
import './Maincontent.css';

const Maincontent = () => {
    return (
        <div className="maincontent">
            <div className="background">
                <Chart />
                <Management />
            </div>
            <PostsFeed />
        </div>
    )
}



export default Maincontent;