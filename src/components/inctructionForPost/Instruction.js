import React, {useState} from "react";
import DaySelect from "../dataForPost/DaySelect";
import MonthSelect from "../dataForPost/MonthSelect";
import RadioButtons from "../typePublications/radioButtons";

const Instructions = () => {

    let transliteMonth = {
        0:'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October', 
        10: 'November',
        11: 'December',
    }

    let date = new Date();

    const [form, setForm] = useState({
        isPrivate: false,
        month: transliteMonth[date.getMonth()],
        day: date.getDate(),
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
        <div className="instructions">
            <div className="data-wrapper">
                <DaySelect valueFormDay={form.day} valueFormMonth={form.month} onChange={selectDay}/>
                <MonthSelect valueFormMonth={form.month} onChange={selectMonth}/>
            </div>
            <RadioButtons onChange={typePublication} valueIsPrivate={form.isPrivate}/>    
        </div>
    )
}


export default Instructions;