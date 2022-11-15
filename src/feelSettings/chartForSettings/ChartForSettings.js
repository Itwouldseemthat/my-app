import React, { useRef } from "react";
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

const ChartForSettings = (props) => {
    const lineChartData = {
        labels: props.days,
        datasets: [
          {
            data: [1, 2, 3, 5, 3, 1, 1, 2, 4, 4, 4, 5, 1, 1, 1, 2, 1, 3, 4],
            label: "feeling",
            borderColor: "blue",
            fill: "true",
            lineTension: 0.5,
          },
        ]
    };

    const options = {
      onClick: (e, activeEls) => {
        let datasetIndex = activeEls[0].datasetIndex;
        let dataIndex = activeEls[0].index;
        let datasetLabel = e.chart.data.datasets[datasetIndex].label;
        let value = e.chart.data.datasets[datasetIndex].data[dataIndex];
        let label = e.chart.data.labels[dataIndex];
        console.log("In click", datasetLabel, label, value);
      },
      plugins: {
        title: {
          display: true,
          text: `${props.month} ${props.year}`,
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
          data={lineChartData}
          color="#f0f"
        />
    )
}

export default ChartForSettings;