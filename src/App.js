import React, { useState } from "react";
import FeelSettings from "./feelSettings/FeelSettings";
import Home from "./Home";
import { Routes, Route, Router } from "react-router-dom";


const App = () => {

  let date = new Date();

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

  let days = getDays(dayInMonth[date.toLocaleString('en-US', {month: 'long'})]);

  function getInitialStateForObjs() {
    let dataForChart = [];

    days.forEach(item => {
      dataForChart.push({
        day: item,
        point: undefined,
      })
    })
    return dataForChart;
  }


  const [objsForData, setObjsForData] = useState(getInitialStateForObjs())


  function getInitialStateForLineChartData() {
    let firstArrForLineChartData = [];
    objsForData.forEach(item => {
      firstArrForLineChartData.push(item.point)
    })
    return firstArrForLineChartData;
  }


  const [lineChartData, setLineChartData] = useState([])



  function addAssesToChart(event, asses, day) {
    event.preventDefault();

    objsForData.forEach(item => {
      if (item.day === new Date(new Date().getFullYear(), new Date().getMonth(), day).getDate()) {
        item.point = asses;
      }
    })
    setObjsForData([
      ...objsForData
    ])

    let newData = getInitialStateForLineChartData();
    setLineChartData([
      ...newData
    ])

    onClick(day, asses);

    setShowCalendar(true);
  }

//======================== calendar functions
  
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
                        className: 'day',
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
                        className: 'day',
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
    dayInMonth.forEach(week => {
      week.forEach(obj => {
        if (obj !== undefined) {
          if (obj.value === new Date().getDate()) {
            obj.className = 'today';
          }
        }
      })
    })
    return dayInMonth;
  }

  const [daysInMonth, setDaysInMonth] = useState(getArrWithDays())

  let colorForAsses = {
    5: 'rgba(248, 248, 82, 0.797)',
    4: 'rgba(243, 200, 61, 0.797)',
    3: 'rgba(82, 135, 248, 0.797)',
    2: 'rgba(240, 101, 37, 0.797)',
    1: 'rgba(232, 63, 63, 0.797)',
  }

  function onClick(num, asses) {
      let data = new Date(new Date().getFullYear(), new Date().getMonth(), num)
      daysInMonth.forEach(week => {
          week.forEach(objDay => {
              if (objDay !== undefined) {
                  if (Object.values(objDay)[0] === data.getDate()) {
                    console.log(Object.values(objDay)[0], data.getDate())
                      objDay.background = colorForAsses[asses]
                  } 
              }
          })
      })
    setDaysInMonth([...daysInMonth]);
  }

  const [showCalendar, setShowCalendar] = useState(true)
//======================== calendar functions
//======================== Home page functions

const [showModal, setShowModal] = useState(false);


function showCreatePostModal(bool) {
    setShowModal(bool)
}


const [arrWithForms, setArrWithForms] = useState([]);


function addInfoAboutPost(event, form) {
    event.preventDefault();
    arrWithForms.unshift(form);
    setArrWithForms(arrWithForms);
    showCreatePostModal(false);
    console.log(arrWithForms);
}

//======================== Home page functions

  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Home 
                      lineChartData={lineChartData} 
                      daysChartLabel={days} 
                      showModal={showModal}
                      showCreatePostModal={showCreatePostModal}
                      addInfoAboutPost={addInfoAboutPost}
                      arrWithForms={arrWithForms}
                    />} exact />
        <Route 
          path="/chart" 
          element={<FeelSettings
                      showCalendar={showCalendar}
                      setShowCalendar={setShowCalendar}
                      daysInMonth={daysInMonth}
                      lineChartData={lineChartData}
                      daysChartLabel={days}
                      onSubmitAssesForm={addAssesToChart}
                      arrWithForms={arrWithForms}
                  />} 
        />
      </Routes>
    </div>
  )
}

export default App;