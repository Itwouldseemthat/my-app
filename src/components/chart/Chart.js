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

const Chart = () => {
    const lineChartData = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
         "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
         "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
        datasets: [
          {
            data: [1, 2, 3, 5, 3, 1, 1, 2, 4, 4, 4, 5, 1, 1, 1, 2, 1, 3, 4],
            label: "feeling",
            borderColor: "blue",
            fill: true,
            lineTension: 0.5,
          },
        ]
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: "COVID-19 Cases of Last 6 Months",
          fontSize: 20
        },
        legend: {
          display: true, //Is the legend shown?
          position: "bottom" //Position of the legend.
        }
      }
    }

    return (
        <Line
          type="line"
          width={160}
          height={60}
          options={options}
          data={lineChartData}
          color="#f0f"
        />
    )
}

export default Chart;