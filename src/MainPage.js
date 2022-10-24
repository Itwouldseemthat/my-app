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
                        onClick={props.clickOnCreatePost}
                    /> 
                </div>
            </div>
        </div>
    )
}


export default MainPage;