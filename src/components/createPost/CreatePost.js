import React, {useState} from "react";
import DaySelect from "../dataForPost/DaySelect";
import MonthSelect from "../dataForPost/MonthSelect";
import './CreatePost.css';


const CreatePost = (props) => {

    const [form, setForm] = useState({
        isPrivate: false,
        month: 'October',
        day: '13',
        text: '',
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


    return (
        <div className="createPost-wrapper">
            <form className="createPost">
                <div className="instructions">
                    <div className="data-wrapper">
                        <DaySelect valueFormDay={form.day} valueFormMonth={form.month} onChange={selectDay}/>
                        <MonthSelect valueFormMonth={form.month} onChange={selectMonth}/>
                    </div>
                    <div className="radio-wrapper">
                        <label>
                            <input 
                                type="radio" 
                                name="typePublication"
                                className="radio-btn"
                                id="private"
                                value={form.isPrivate}
                                onChange={() => typePublication(true)}
                            />
                        Private
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="typePublication"
                                className="radio-btn"
                                id="public"
                                value={form.isPrivate}
                                onChange={() => typePublication(false)}
                            />
                        Public
                        </label>
                    </div>
                    
                </div>
            </form>
            <button type="submit" onClick={props.clickOnExitCreatePost}>закрыть</button>
        </div>
    )
}


export default CreatePost;