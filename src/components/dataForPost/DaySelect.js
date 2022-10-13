import React from "react";


const DaySelect = (props) => {
    let dayInMonth = {
        January: 31,
        February: 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31,
    }


    function getDays(prop) {
        let arr = [];
        for (let i = 1; i <= prop; i++) {
            arr.push(i);
        }
        return arr;
    }

    let array = getDays(dayInMonth[props.valueFormMonth]);


    return (
        <select name="DaySelect" value={props.valueFormDay} onChange={(event) => props.onChange(event.target.value)}>
            {
                array.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))
            }
        </select>
    )
}

export default DaySelect;

