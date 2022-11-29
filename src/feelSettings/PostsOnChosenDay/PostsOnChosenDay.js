import React from "react";
import Post from "../../components/post/post";
import './PostsOnChosenDay.css'


const PostsOnChosenDay = (props) => {

// let filteredForms = props.arrWithForms.filter(function(form) {
//     return form.day === props.dataForPostsFeed
// })


    return (
        <div className="postsFeed">
            {
                props.arrWithForms.filter(function(form) {
                    return form.day === props.dataForPostsFeed
                }).map(item => (
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

export default PostsOnChosenDay;