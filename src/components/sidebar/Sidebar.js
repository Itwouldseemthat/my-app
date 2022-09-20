import React from "react";
import UserProfile from "../userProfile/UserProfile";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar background">
            <UserProfile />
        </div>
    )
}

export default Sidebar;