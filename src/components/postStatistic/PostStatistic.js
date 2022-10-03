import React from "react";
import Comment from "../comment/Comment";
import Like from "../like/Like";
import Repost from "../repost/Repost";
import './PostStatistic.css';


const PostStatistic = () => {
    return (
        <div className="postStatistic">
            <Comment />
            <Like />
            <Repost />
        </div>
    )
}


export default PostStatistic;