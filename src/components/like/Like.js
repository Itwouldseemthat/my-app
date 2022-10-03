import React from "react";
import like from '../../icons/love.png';


const Like = () => {
    return (
        <div className="like stat-wrapper">
            <img src={like} className="likeIcon icon"></img>
            <div className="countOfLikes">47</div>
        </div>
    )
}


export default Like;