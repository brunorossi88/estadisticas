import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import { Button } from '@material-ui/core';

let LineChart;

function Chart2(params) {

  var c=params.circunscripcion;


  const [circunscripcion, setCircunscripcion] = useState('0');
  const [causasingresadas, setCausasingresadas] = useState();
  const [causassentenciadas, setCausassentenciadas] = useState();
  const [year, setYear] = useState();
  const [label, setLabel] = useState();

  //Causas Ingresadas x año
  var causasi2017 = [10, 20, 30, 40];
  var causasi2018 = [10, 20, 30, 20];
  var causasi2019 = [10, 50, 30, 20];
  var causasi2020 = [30, 20, 30, 20];
  var causasi2021 = [10, 20, 80, 20];

   //Causas Sentenciadas x año
   var causass2017 = [40, 20, 30, 40];
   var causass2018 = [10, 80, 30, 20];
   var causass2019 = [40, 50, 30, 20];
   var causass2020 = [30, 60, 30, 20];
   var causass2021 = [90, 20, 80, 20];

   //Totales anuales
   var causastotalesi = [500,400,300,450,600];
   var causastotaless = [490,390,300,400,650];

   //Labels
   var trimestres = ['1er Trimestre', '2do Trimestre', '3er Trimestre','4to Trimestre'];
   var years = [2017, 2018, 2019, 2020, 2021];



  useEffect(() => {
    buildChart();
  }, [year]);

  const buildChart = () => {
    var ctx = document.getElementById("LineChart").getContext("2d");

    if (typeof LineChart !== "undefined") LineChart.destroy();



    var data = {
      labels: label,
      datasets: [{
        axis: 'y',
        label: 'Ingresadas',
        data: causasingresadas,
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
        label: 'Sentenciadas',
        data: causassentenciadas,
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

    


    LineChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
  
    });
  }

  return (
    <div>
      <h2>Totales de Causas por Circunscripción {c}</h2>

      <Button onClick={() => {
        setCausasingresadas(causasi2017);  
        setCausassentenciadas(causass2017);  
        setLabel(trimestres);  
        setYear('2017');
      }}>2017</Button>
       <Button onClick={() => {
        setCausasingresadas(causasi2018);
        setCausassentenciadas(causass2018);
        setLabel(trimestres); 
        setYear('2018');
      }}>2018</Button>
      <Button onClick={() => {
         setCausasingresadas(causasi2019);
         setCausassentenciadas(causass2019);
         setLabel(trimestres); 
         setYear('2019');
      }}>2019</Button>
      <Button onClick={() => {
        setCausasingresadas(causasi2020);
        setCausassentenciadas(causass2020);
        setLabel(trimestres); 
        setYear('2020');
      }}>2020</Button>
       <Button onClick={() => {
         setCausasingresadas(causasi2021);
         setCausassentenciadas(causass2021);
         setLabel(trimestres); 
         setYear('2021');
      }}>2021</Button>
           <Button onClick={() => {
         setCausasingresadas(causastotalesi);
         setCausassentenciadas(causastotaless);
         setLabel(years); 
         setYear('');
      }}>Todos</Button>


      <canvas id="LineChart" width="1000" height="400" />
     
    </div>
  )
}

export default Chart2