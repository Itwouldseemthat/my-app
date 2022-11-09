import React from "react";
import { Link } from "react-router-dom";
import './SideButtons.css';

const SideButtons = () => {
    return (
        <div className="sideButtons background">
            <Link to='/chart' className="sideBtn feelSettings">Feel Settings</Link>
            <button type="submit" className="friends sideBtn">Friends</button>
            <button type="submit" className="newsFeed sideBtn">News feed</button>
        </div>
    )
}

export default SideButtons;