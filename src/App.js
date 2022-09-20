import React from "react";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Maincontent from "./components/maincontent/Maincontent";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="app">
            <Header />
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