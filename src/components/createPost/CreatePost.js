import React from "react";
import Instructions from "../inctructionForPost/Instruction";
import './CreatePost.css';


const CreatePost = (props) => {


    return (
        <div className="createPost-wrapper">
            <form className="createPost">
                <Instructions />
            </form>
            <button type="submit" onClick={props.clickOnExitCreatePost}>закрыть</button>
        </div>
    )
}


export default CreatePost;