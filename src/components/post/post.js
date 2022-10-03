import React from "react";
import './post.css';
import PostContent from "../postContent/PostContent";
import PostHeader from "../postHeader/PostHeader";



import PostStatistic from "../postStatistic/PostStatistic";


const Post = () => {
    return (
        <div className="post">
            <PostHeader />
            <PostContent text="tralival"/>
            <PostStatistic />
        </div>
    )
}

export default Post;