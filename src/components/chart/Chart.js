import React from "react";
import './Chart.css';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {

    const options = {
      plugins: {
        title: {
          display: true,
          text: "September 2022",
          fontSize: 20
        },
        legend: {
          display: false, //Is the legend shown?
          position: "bottom" //Position of the legend.
        }
      }
    }

    return (
        <Line
          className="chart"
          type="line"
          width={160}
          height={60}
          options={options}
          data={props.lineChartData}
          color="#f0f"
        />
    )
}

export default Chart;