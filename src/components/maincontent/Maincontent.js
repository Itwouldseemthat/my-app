import React, { Component } from "react";
import Chart from "../chart/Chart";
import './Maincontent.css';

const Maincontent = () => {
    return (
        <div className="maincontent background">
            <Chart />
            <div className="management">
                <div className="statistic">
                    <div className="followers bgstat">Followers: 456</div>
                    <div className="following bgstat">Following: 244</div>
                    <div className="empathy bgstat">Empathy: 1153</div>
                </div>
                <div className="lane2"></div>
                <div className="control">
                    <div className="countPosts">Posts: 206</div>
                    <div className="postButtons">
                        <button type="submit" className="addPost postBtn">+</button>
                        <button type="submit" className="settingsPost postBtn">-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Maincontent;