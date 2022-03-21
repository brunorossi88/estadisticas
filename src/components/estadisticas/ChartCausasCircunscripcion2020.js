import { Typography } from '@material-ui/core';
import { Chart } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';



const ChartCausasCircunscripcion2020 = () => {




    var labels = ['2019 1 Trimestre', '2019 2 Trimestre', '2019 3 Trimestre', '2019 4 Trimestre', '2019 Total', '2020 1 Trimestre', '2020 2 Trimestre', '2020 3 Trimestre', '2020 4 Trimestre', '2020 Total', '2021 1 Trimestre', '2021 2 Trimestre', '2021 3 Trimestre', '2021 4 Trimestre', '2021 Total'];

    var datos = [138, 168, 101, 121, 528, 46, 53, 166, 122, 387, 46, 134, 176, 198, 610];
    var datos1 = [50, 50, 50, 50, 50, 50, 50, 166, 122, 387, 46, 134, 176, 198, 610];



    const data = {
        labels: [
            'Circunscripcion I',
            'Circunscripcion II',
            'Circunscripcion III'
        ],
        datasets: [{
            label: 'Total Causas 2020',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const chartConfig = {
        type: 'doughnut',
        data: data,
    };


    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);


    const MostrarGrafico = () => {
        const newChartInstance = new Chart(chartContainer.current, chartConfig);
        setChartInstance(newChartInstance);
    };


    useEffect(() => {

        MostrarGrafico();

    }, []);

    return (
        <div>
            <Typography
                style={{ textTransform: "uppercase" }}
                color="secondary"
                gutterBottom
            >
                Total Causas 2020 x Circunscripción
            </Typography>
            <canvas ref={chartContainer} />
        </div>
    );
};

export default ChartCausasCircunscripcion2020;