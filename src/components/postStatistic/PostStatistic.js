import React, { useState } from "react";
import Comment from "../comment/Comment";
import Like from "../like/Like";
import Repost from "../repost/Repost";
import './PostStatistic.css';
import noneLiked from '../../icons/love.png';
import liked from '../../icons/heart.png';



const PostStatistic = (props) => {

    const [statistic, setStatistic] = useState({
        comment: 0,
        iconEmpathy: noneLiked,
        countEmpathy: 0,
        repost: 0,
    })

    // function clickOnLike() {
    //     setStatistic({
    //         ...statistic,
    //         iconEmpathy: likee,
    //     })
    //     console.log(statistic)
    // }

    function clickOnLike() {
        if (statistic.iconEmpathy === noneLiked) {
            setStatistic({
                ...statistic,
                iconEmpathy: liked,
                countEmpathy: statistic.countEmpathy + 1,
            })
        }
        else if (statistic.iconEmpathy === liked) {
            setStatistic({
                ...statistic,
                iconEmpathy: noneLiked,
                countEmpathy: statistic.countEmpathy - 1,
            })
        }
        console.log("click")
    }

    console.log("old", statistic)
    return (
        <div className="postStatistic">
            <Comment />
            <Like 
                iconEmpathy={statistic.iconEmpathy}
                countEmpathy={statistic.countEmpathy}
                onClick={clickOnLike} 
                addPointToAllEmpathy={props.addPointToAllEmpathy}
            />
            <Repost />
        </div>
    )
}


export default PostStatistic;