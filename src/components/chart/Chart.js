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
    const data = {
      labels: props.daysChartLabel,
      datasets: [
        {
          data: props.lineChartData,
          label: "feeling",
          borderColor: "blue",
          fill: "true",
          lineTension: 0.5,
        },
      ]
    }

    const options = {
      plugins: {
        title: {
          display: true,
          text: `${new Date().toLocaleString('en-US', {month: 'long'})} ${new Date().getFullYear()}`,
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
          data={data}
          color="#f0f"
        />
    )
}

export default Chart;