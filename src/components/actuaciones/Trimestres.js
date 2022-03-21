
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2'
import Chart1 from '../estadisticas/ChartCausasCircunscripcionTrimestres2020';
import Chart2 from '../estadisticas/Chart2';
import Chart3 from '../estadisticas/Chart3';
import Chart4 from '../estadisticas/Chart4';
import Chart5 from '../estadisticas/Chart5';
import Chart6 from '../estadisticas/Chart6';




function Trimestres() {

    const [url, setURL] = useState('https://localhost:44322/api/Post/trimestres');
    const [respuestaAPI, setRespuestaAPI] = useState([]);   


    const labels = [];
    const datos = [];


    useEffect(() => {
        consultaAPI();
    }, [respuestaAPI]);


    const consultaAPI = async () => {
        const consulta = await axios({ url });
        

        consulta.data.map(element => {

            labels.push(element.fecha);
            datos.push(element.ingresadas);
        });

        setRespuestaAPI(consulta.data);
    }


    const chartData = {
        labels: labels,
        datasets: [{
                                     label: 'level of thicceness',
                                     data: datos,
                                     backgroundColor: [
                                         'rgba(255, 99, 132, 0.2)',
                                         'rgba(54, 162, 235, 0.2)',
                                         'rgba(255, 206, 86, 0.2)',
                                         'rgba(75, 192, 192, 0.2)',
                                         'rgba(153, 102, 255, 0.2)',
                                         'rgba(255, 159, 64, 0.2)',
                                         'rgba(255, 99, 132, 0.2)',
                                         'rgba(54, 162, 235, 0.2)',
                                         'rgba(255, 206, 86, 0.2)',
                                         'rgba(75, 192, 192, 0.2)',
                                         'rgba(153, 102, 255, 0.2)',
                                         'rgba(255, 159, 64, 0.2)',
                                         'rgba(255, 99, 132, 0.2)',
                                         'rgba(54, 162, 235, 0.2)',
                                         'rgba(255, 206, 86, 0.2)',
                                         'rgba(75, 192, 192, 0.2)',
                                         'rgba(153, 102, 255, 0.2)',
                                         'rgba(255, 159, 64, 0.2)',
                                         'rgba(255, 99, 132, 0.2)',
                                         'rgba(54, 162, 235, 0.2)',
                                         'rgba(255, 206, 86, 0.2)',
                                         'rgba(75, 192, 192, 0.2)',
                                         'rgba(153, 102, 255, 0.2)',
                                         'rgba(255, 159, 64, 0.2)',
                                     ],
                                     borderColor: [
                                         'rgba(255, 99, 132, 1)',
                                         'rgba(54, 162, 235, 1)',
                                         'rgba(255, 206, 86, 1)',
                                         'rgba(75, 192, 192, 1)',
                                         'rgba(153, 102, 255, 1)',
                                         'rgba(255, 159, 64, 1)',
                                         'rgba(255, 99, 132, 1)',
                                         'rgba(54, 162, 235, 1)',
                                         'rgba(255, 206, 86, 1)',
                                         'rgba(75, 192, 192, 1)',
                                         'rgba(153, 102, 255, 1)',
                                         'rgba(255, 159, 64, 1)',
                                         'rgba(255, 99, 132, 1)',
                                         'rgba(54, 162, 235, 1)',
                                         'rgba(255, 206, 86, 1)',
                                         'rgba(75, 192, 192, 1)',
                                         'rgba(153, 102, 255, 1)',
                                         'rgba(255, 159, 64, 1)',
                                         'rgba(255, 99, 132, 1)',
                                         'rgba(54, 162, 235, 1)',
                                         'rgba(255, 206, 86, 1)',
                                         'rgba(75, 192, 192, 1)',
                                         'rgba(153, 102, 255, 1)',
                                         'rgba(255, 159, 64, 1)',
                                     ],
                                     borderWidth: 1
                                 }]
    };



    return (
        <div>
            <div>Trimestres</div>

            
          

        </div>
    )
}

export default Trimestres