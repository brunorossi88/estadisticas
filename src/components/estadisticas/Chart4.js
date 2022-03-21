import React, { Component, useState, Utils } from 'react';
import Chart from 'chart.js/auto';

export default class Chart4 extends Component {


	chartRef = React.createRef(); 


	componentDidMount() {

        

    const [labels, setLabels] = useState([]);
    const [datos, setDatos] = useState([]);

    
    setLabels(this.props.labels);
    setDatos(this.props.datos);  



            
		const ctx = this.chartRef.current.getContext("2d");
  
       
        const data = {         
          labels: labels,
          datasets: [{
            axis: 'y',
            label: 'My First Dataset',
            data: datos,
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
          }]
        };

        
		
		new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
		});


	}

	render() {

   
    

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