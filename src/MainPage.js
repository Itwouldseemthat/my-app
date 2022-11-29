import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Maincontent from "./components/maincontent/Maincontent";
import Header from "./components/header/Header";


const MainPage = (props) => {


    return (
        <div className="MainPage">
            <Header />
            <div className="container">
                <div className="content-wrapper">
                    <Sidebar />
                    <Maincontent 
                        arrWithForms={props.arrWithForms}
                        daysChartLabel={props.daysChartLabel} 
                        showCreatePostModal={props.showCreatePostModal}
                        lineChartData={props.lineChartData}
                    /> 
                </div>
            </div>
        </div>
    )
}


export default MainPage;