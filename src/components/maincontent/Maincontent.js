import React, { Component } from "react";
import Chart from "../chart/Chart";
import './Maincontent.css';

// const Maincontent = () => {
//     return (
//         <div className="maincontent background">
//             <Chart />
//         </div>
//     )
// }

class Maincontent extends Component {
    render() {
      return <Chart />
    }
}

export default Maincontent;