import React from "react";
import PostContent from "../postContent/PostContent";
import PostHeader from "../postHeader/PostHeader";




const Post = () => {
    return (
        <div className="post">
            <PostHeader />
            <PostContent />
        </div>
    )
}

export default Post;