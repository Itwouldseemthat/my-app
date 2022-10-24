import React from "react";
import './post.css';
import PostContent from "../postContent/PostContent";
import PostHeader from "../postHeader/PostHeader";



import PostStatistic from "../postStatistic/PostStatistic";


const Post = (props) => {


    return (
        <div className="post posts-background">
            <PostHeader 
                isPrivate={props.isPrivate} 
                day={props.day}
                month={props.month}
                time={props.time}
            />
            <PostContent text={props.text}/>
            <PostStatistic 
                iconEmpathy={props.iconEmpathy}
                addPointToAllEmpathy={props.addPointToAllEmpathy}
            />
        </div>
    )
}

export default Post;