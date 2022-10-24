import React from "react";
import './PostHeader.css';
import lock from '../../icons/lock.png'

const PostHeader = (props) => {
    return (
        <div className="postHeader">
            <div className="whoPosting">
                <img className="microImg" src="https://resheto.net/images/mater/pozitivnye_kartinki_2.jpg"></img>
                <div className="postAutor">Никита Цуканов</div>
            </div>
            {props.isPrivate && <img src={lock} className="lock"></img>}
            <div className="timeOfPost">
                <div className="time">posted at {props.time}</div>
                <div className="date">{props.day} {props.month} 2022</div>
            </div>
        </div>
    )
}


export default PostHeader;