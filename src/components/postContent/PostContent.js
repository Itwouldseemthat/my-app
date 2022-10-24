import React from "react";
import './PostContent.css';


// отличное место для передачи текста пропсой
// <div className="postText">{postText}</div>
const PostContent = (props) => {
    return (
        <div className="postContent">
            <div className="postText">{props.text}</div>
        </div>
    )
}

export default PostContent;