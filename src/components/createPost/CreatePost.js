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
    }


    function selectMonth(monthSelect) {
        setForm({
            ...form,
            month: monthSelect,
        })
    }

    function selectDay(daySelect) {
        setForm({
            ...form,
            day: new Date(new Date().getFullYear(), new Date().getMonth(), daySelect).getDate(),
        })
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
            <button type="submit" onClick={() => props.showCreatePostModal(false)}>закрыть</button>
        </div>
    )
}


export default CreatePost;