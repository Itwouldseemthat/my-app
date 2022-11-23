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

  const [lineChartData, setLineChartData] = useState({
        labels: days,
        datasets: [
          {
            data: [],
            label: "feeling",
            borderColor: "blue",
            fill: "true",
            lineTension: 0.5,
          },
        ]    
  })

  function addAssesToChart(event, asses) {
    event.preventDefault();
    lineChartData.datasets[0].data.push(asses)
    setLineChartData({
      ...lineChartData,
    })
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home lineChartData={lineChartData} />} exact />
        <Route 
          path="/chart" 
          element={<FeelSettings 
                      lineChartData={lineChartData}
                      onSubmitAssesForm={addAssesToChart}
                  />} 
        />
      </Routes>
    </div>
  )
}

export default App;