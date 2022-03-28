import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { Chart } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';



const ChartCausasCircunscripcionTrimestres2020 = (props) => {


    const [circunscripcion, setCircunscripcion] = useState('0');

    var labels = ['2019 1 Trimestre', '2019 2 Trimestre', '2019 3 Trimestre', '2019 4 Trimestre', '2019 Total', '2020 1 Trimestre', '2020 2 Trimestre', '2020 3 Trimestre', '2020 4 Trimestre', '2020 Total', '2021 1 Trimestre', '2021 2 Trimestre', '2021 3 Trimestre', '2021 4 Trimestre', '2021 Total'];



    var datos = [0, 0, 0, 0];
    var datos1 = [50, 50, 50, 50];
    var datos2 = [50, 50, 50, 50];
    var datos3 = [5, 5, 5, 5];


    var data = {
        labels: [
            '¨Primer Trimestre',
            'Segundo Trimestre',
            'Tercer Trimestre',
            'Cuarto Trimestre'
        ],
        datasets: [{
            label: 'Total Causas 2020',
            data: datos1,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    var chartConfig = {
        type: 'doughnut',
        data: data,
    };

 
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    
    var newChartInstance=null;
    //newChartInstance = new Chart(chartContainer.current, chartConfig);      
    //setChartInstance(newChartInstance);

    const MostrarGrafico = () => {

        console.log(circunscripcion);

        if (circunscripcion == '0') {
            console.log('circunscripcion');
        }
        else {
            console.log(' else');
        } 


        if(newChartInstance==null)
        {
            alert('nueva');
            //newChartInstance.destroy();
            
        }
        else
        {
            alert('entra');
           // newChartInstance.destroy();
            //setChartInstance(newChartInstance);

           // newChartInstance.instances[4].update()
        }
      
       
       
    };


    useEffect(() => {
        MostrarGrafico();
    }, [circunscripcion]);


    return (
        <div>
            <Typography
                style={{ textTransform: "uppercase" }}
                color="secondary"
                gutterBottom
                align='center'
            >
                Total Causas 2020 x Circunscripción x Trimestres
            </Typography>

            <div align="center">

                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button id='btnI' onClick={() => {                     
                        setCircunscripcion('I');                      
                    }}>
                        I</Button>
                    <Button id='btnII'>II</Button>
                    <Button id='btnIII'>III</Button>
                </ButtonGroup>

            </div>

            <canvas id='bar1' ref={chartContainer} />
        </div>
    );
};


export default ChartCausasCircunscripcionTrimestres2020;