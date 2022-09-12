import React from "react";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Maincontent from "./components/maincontent/Maincontent";

function App() {
    return (
        <div className="app">
            <div className="header">
                <div className="logo">HAYF</div>
            </div>
            <div className="container">
                <div className="content-wrapper">
                  <Sidebar />
                  <Maincontent /> 
                </div>
            </div>
        </div>
    )
}

export default App;