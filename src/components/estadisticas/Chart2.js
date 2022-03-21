import React, { Component, Utils } from 'react';
import Chart from 'chart.js/auto';

export default class Chart2 extends Component {

  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");

    const labels = [65, 59, 80, 81, 56, 55, 40];

    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

    new Chart(ctx, {
      type: "line",
      data: data,
    });
  }
  render() {

    const respuesta = this.props.data;
    console.log(respuesta);
  


    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}