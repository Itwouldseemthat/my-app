import React, {useState} from "react";
import AddPostBtn from "../addPostBtn/AddPostBtn";
import Instructions from "../inctructionForPost/Instruction";
import TextForPost from "../textarea/TextForPost";
import './CreatePost.css';


const CreatePost = (props) => {

    let date = new Date();

    const [form, setForm] = useState({
        isPrivate: false,
        month: date.toLocaleString('en-US', {month: 'long'}),
        day: date.getDate(),
        text: '',
        time: date.toLocaleTimeString().slice(0,-3),
        id: (new Date()).getTime()
    })


    
    function typePublication(bool) {
        setForm({
            ...form,
            isPrivate: bool,
        })
        console.log("isPrivate", form.isPrivate)
    }


    function selectMonth(monthSelect) {
        setForm({
            ...form,
            month: monthSelect,
        })
        console.log(form);
    }

    function selectDay(daySelect) {
        setForm({
            ...form,
            day: daySelect,
        })
        console.log(form);
    }

    function EnterText(textarea) {
        setForm({
            ...form,
            text: textarea,
        })
    }



    return (
        <div className="createPost-wrapper">
            <form className="createPost" onSubmit={(event) => props.onSubmit(event, form)}>
                <Instructions 
                    form={form}
                    typePublication={typePublication} 
                    selectDay={selectDay}
                    selectMonth={selectMonth}
                />
                <div className="lane"></div>
                <TextForPost form={form.text} onChange={EnterText} />  
                <AddPostBtn />
            </form>
            <button type="submit" onClick={props.clickOnExitCreatePost}>закрыть</button>
        </div>
    )
}


export default CreatePost;