import React,{ useState }  from "react";
import './Calendar.css';

const Calendar = (props) => {

    // ======================================

    function getArrWithDays() {
        let data = new Date();

        let firstDay = new Date(data.getFullYear(), data.getMonth(), 1);
        let firstDayName = firstDay.getDay() - 1;
        if (firstDayName < 0) {
            firstDayName = 6;
        }
    
        let dayInMonth = [];
    
        let d = 1;
        while (dayInMonth.length <= 4) {
            let week = [];
            if (dayInMonth.length === 0) {
                while (week.length <= 6){
                    let day = new Date(data.getFullYear(), data.getMonth(), d)
                    if (week.length < firstDayName) {
                        week.push(undefined)
                    }
                    else if (week.length >= firstDayName && day.getMonth() === data.getMonth()) {
                        week.push({
                            value: day.getDate(),
                        });
                        d += 1;
                    }
                }
            }
            else if (dayInMonth.length > 0) {
                while (week.length <= 6){
                    let day = new Date(data.getFullYear(), data.getMonth(), d)
                    if (day.getMonth() === data.getMonth()) {
                        week.push({
                            value: day.getDate(),
                        });
                        d += 1;
                    }
                    else if (day.getMonth() !== data.getMonth()){
                        week.push(undefined);
                    }
                }
            }
            dayInMonth.push(week);
        }
        return dayInMonth;
    }

    const [daysInMonth, setDaysInMonth] = useState(getArrWithDays())



    function onClick(num) {
        let data = new Date(new Date().getFullYear(), new Date().getMonth(), num)
        console.log(num)
        daysInMonth.forEach(week => {
            week.forEach(objDay => {
                if (objDay !== undefined) {
                    if (Object.values(objDay)[0] === data.getDate()) {
                        objDay.background = 'rgba(82, 135, 248, 0.797)';
                    } 
                }
            })
        })
        setDaysInMonth([...daysInMonth]);
        console.log(daysInMonth)
    }

    // ========================================

    const weekDayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun'];

    return (
        <div className="calendar">
            <header>
                <button onClick={() => onClick(props.dayAsses)}>{'<'}</button>

                <select></select>

                <select></select>

                <button>{'>'}</button>
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
                    {daysInMonth.map((week, index) => 
                        <tr key={index} className='week'>
                            {week.map((date, index) => date ? 
                                <td 
                                    onClick={props.ChooseDataForAsses} 
                                    style={{background: date.background}} 
                                    value={date.value} 
                                    key={index} 
                                    className="day"
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