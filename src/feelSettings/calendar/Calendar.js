import React from "react";
import './Calendar.css';

const Calendar = (props) => {

    const weekDayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun'];

    return (
        <div className="calendar background">
            <header>
                {new Date().toLocaleString('en-US', {month: 'long'})}
            </header>
            <table>
                <thead>
                    <tr>
                        {
                            weekDayName.map((name, index) => 
                                <th key={index}>{name}</th>
                            )
                        }

                    </tr>
                </thead>
                <tbody>
                    {props.daysInMonth.map((week, index) => 
                        <tr key={index} className='week'>
                            {week.map((date, index) => date ? 
                                <td 
                                    onClick={props.ChooseDataForAsses} 
                                    style={{background: date.background}} 
                                    value={date.value} 
                                    key={index} 
                                    className={date.className}
                                    >{date.value}</td>
                                :
                                <td key={index}></td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;