import React from "react"; 


const TextForPost = (props) => {
    return (
        <textarea 
            className="textForPost" 
            placeholder="How are you feel?" 
            value={props.form.text}
            onChange={(event) => props.onChange(event.target.value)}
        /> 
    )
}


export default TextForPost;