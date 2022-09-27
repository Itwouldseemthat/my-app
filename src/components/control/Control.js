import React from "react";
import './Control.css';

const Control = () => {
    return (
        <div className="control">
            <div className="countPosts">Posts: 206</div>
            <div className="postButtons">
                <button type="submit" className="addPost postBtn">+</button>
                <button type="submit" className="settingsPost postBtn">-</button>
            </div>
        </div>
    )
}

export default Control;