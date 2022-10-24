import React, {useState} from "react";
import nonelike from "../../icons/love.png";
import like from '../../icons/heart.png';


const Like = (props) => {

    function twoFuncForLike() {
        props.onClick()
        props.addPointToAllEmpathy(props.iconEmpathy)
    }


    return (
        <div className="like stat-wrapper">
            <img  
                src={props.iconEmpathy} 
                className="likeIcon icon"
                onClick={twoFuncForLike}
            >
            </img>
            {props.countEmpathy !== 0 && <div className="countOfLikes">{props.countEmpathy}</div>}
        </div>
    )
}


export default Like;