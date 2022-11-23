import React from "react";
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
          data={props.lineChartData}
          color="#f0f"
        />
    )
}

export default ChartForSettings;