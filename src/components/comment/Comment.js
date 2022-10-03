import React from "react";
import comment from '../../icons/comment.png';

const Comment = () => {
    return (
        <div className="comment stat-wrapper">
            <img src={comment} className="commentIcon icon"></img>
            <div className="countOfComments">12</div>
        </div>
    )
}


export default Comment;