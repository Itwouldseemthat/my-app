import React from "react";
import repost from '../../icons/repost.png';


const Repost = () => {
    return (
        <div className="repost stat-wrapper">
            <img src={repost} className="repostIcon icon"></img>
            <div className="countOfReposts">2</div>
        </div>
    )
}


export default Repost;