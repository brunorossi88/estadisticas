import { Chart } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@material-ui/core';



const Chart5 = () => {

//var labels = [65, 59, 80];
var labels = ['2019 1 Trimestre', '2019 2 Trimestre', '2019 3 Trimestre', '2019 4 Trimestre', '2019 Total', '2020 1 Trimestre', '2020 2 Trimestre', '2020 3 Trimestre', '2020 4 Trimestre', '2020 Total', '2021 1 Trimestre', '2021 2 Trimestre', '2021 3 Trimestre', '2021 4 Trimestre', '2021 Total'];
var labels2 = ['2019 111 Trimestre', '2019 2 Trimestre', '2019 3 Trimestre', '2019 4 Trimestre', '2019 Total', '2020 1 Trimestre', '2020 2 Trimestre', '2020 3 Trimestre', '2020 4 Trimestre', '2020 Total', '2021 1 Trimestre', '2021 2 Trimestre', '2021 3 Trimestre', '2021 4 Trimestre', '2021 Total'];

var datos = [138, 168, 101, 121, 528, 46, 53, 166, 122, 387, 46, 134, 176, 198, 610];
var datos1 = [50, 50, 50, 50, 50, 50, 50, 166, 122, 387, 46, 134, 176, 198, 610];

const [datosx, setDatosx] = useState(datos);

useEffect(() => { 

}, [datosx]);



var data = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'My First Dataset',
    data: datosx,
    fill: false,
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
  },{
    axis: 'y',
    label: 'My First Dataset1',
    data: datosx,
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 0, 0.2)',
      'rgba(255, 159, 0, 0.2)',
      'rgba(255, 205, 0, 0.2)',
      'rgba(75, 192, 0, 0.2)',
      'rgba(54, 162, 0, 0.2)',
      'rgba(153, 102, 0, 0.2)',
      'rgba(201, 203, 0, 0.2)'
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



var chartConfig = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

  

  var chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  var newChartInstance = null;
  const MostrarGrafico = () => {
 
  newChartInstance = new Chart(chartContainer.current, chartConfig);
  setChartInstance(newChartInstance);

  console.log(datosx);
  

  };
  


  return (
    <div>
      
      <canvas ref={chartContainer} />

      <canvas id="myChart" width="500" height="500"></canvas>
     

      <Button onClick={() => {  
        
        setDatosx(datos1);
        var ctx = document.getElementById('myChart').getContext('2d');
        
        console.log(datosx,ctx);
                      

                    }}>ver</Button>

    </div>
  );
};

export default Chart5;