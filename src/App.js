import React from "react";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Maincontent from "./components/maincontent/Maincontent";

function App() {
    return (
        <div className="container">
            <Sidebar />
            <Maincontent />
        </div>
    )
}

export default App;