import React from "react";
import './PostContent.css';


// отличное место для передачи текста пропсой
// <div className="postText">{postText}</div>
const PostContent = ({text}) => {
    return (
        <div className="postContent">
            <div className="postText">Я сегодня хорошо выспался, встал в 5:30 и даже не умирал!
            Помылся, приготовил завтрак, не опоздал на работу,  настроение збсь</div>
        </div>
    )
}

export default PostContent;