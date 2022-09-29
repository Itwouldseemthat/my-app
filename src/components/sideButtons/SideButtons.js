import React from "react";
import './SideButtons.css';

const SideButtons = () => {
    return (
        <div className="sideButtons background">
            <button type="submit" className="sideBtn feelSettings">Feel Settings</button>
            <button type="submit" className="friends sideBtn">Friends</button>
            <button type="submit" className="newsFeed sideBtn">News feed</button>
        </div>
    )
}

export default SideButtons;