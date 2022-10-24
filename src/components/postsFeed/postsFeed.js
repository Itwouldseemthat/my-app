import React from "react";
import "./PostsFeed.css";
import Post from "../post/post";



const PostsFeed = (props) => {

    return (
        <div className="postsFeed">
            {
                props.arrWithForms.map(item => (
                    <Post 
                        key={item.id} 
                        isPrivate={item.isPrivate}
                        time={item.time}
                        day={item.day} 
                        month={item.month} 
                        text={item.text}
                        addPointToAllEmpathy={props.addPointToAllEmpathy}
                    />
                ))
            }
        </div>
    )
}

export default PostsFeed;