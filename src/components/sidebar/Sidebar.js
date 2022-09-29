import React from "react";
import SideButtons from "../sideButtons/SideButtons";
import UserProfile from "../userProfile/UserProfile";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <UserProfile />
            <SideButtons />
        </div>
    )
}

export default Sidebar;