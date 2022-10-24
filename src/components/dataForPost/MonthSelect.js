import React from "react";

const MonthSelect  = (props) => {
    return (
        <select name="MonthSelect" value={props.valueFormMonth} onChange={(event) => props.onChange(event.target.value)} >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>
    )
}

export default MonthSelect;