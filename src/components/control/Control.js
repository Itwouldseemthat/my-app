import React from "react";
import './Control.css';

const Control = (props) => {
    return (
        <div className="control">
            <div className="countPosts">Posts: {props.arrWithForms.length}</div>
            <div className="postButtons">
                <button type="submit" className="addPost postBtn" onClick={() => props.showCreatePostModal(true)}>+</button>
                <button type="submit" className="settingsPost postBtn">-</button>
            </div>
            
        </div>
    )
}

export default Control;