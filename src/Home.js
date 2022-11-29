import React, { useState } from "react";
import './Home.css';
import MainPage from "./MainPage";

import CreatePost from "./components/createPost/CreatePost";

function Home(props) {

    return (
        <div className="main">
            {props.showModal && <CreatePost showCreatePostModal={props.showCreatePostModal} onSubmit={props.addInfoAboutPost} />}
            <MainPage 
                arrWithForms={props.arrWithForms}
                daysChartLabel={props.daysChartLabel}
                showCreatePostModal={props.showCreatePostModal}
                lineChartData={props.lineChartData}
            />   
        </div>
    )
}

export default Home;