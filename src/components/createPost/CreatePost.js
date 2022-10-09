import React from "react";
import './CreatePost.css';


const CreatePost = (props) => {
    return (
        <div className="createPost-wrapper" onClick={props.clickOnExitCreatePost} >
            <form className="createPost">
                <div className="instructions">
                    {/* <div className="radio-wrapper">
                        <input type="radio" className="radioBtn" name="visibility">Public</input>
                        <input type="radio" className="radioBtn" name="visibility">Privat</input>
                    </div> */}
                </div>
            </form>
        </div>
    )
}


export default CreatePost;