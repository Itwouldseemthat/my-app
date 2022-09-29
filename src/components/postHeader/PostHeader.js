import React from "react";
import './PostHeader.css';


const PostHeader = () => {
    return (
        <div className="postHeader">
            <div className="whoPosting">
                <img className="microImg" src="https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg"></img>
                <div className="postAutor">Никита Цуканов</div>
            </div>
            <div className="timeOfPost">
                <div className="time">posted at 12:46</div>
                <div className="date">29 september 2022</div>
            </div>
        </div>
    )
}


export default PostHeader;