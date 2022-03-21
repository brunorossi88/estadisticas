import React, { useState, useEffect } from 'react'
import Topbar from './Topbar'
import axios from 'axios'
import SimpleLineChart from './estadisticas/SimpleLineChart';







function Home() {

    const [url, setURL] = useState('https://localhost:44322/api/Post/fueros');
    const [respuestaAPI, setRespuestaAPI] = useState([]);


    useEffect(() => {
        const consultaAPI = async () => {
            const consulta = await axios({ url });
            setRespuestaAPI(consulta.data);
        };
        consultaAPI();
    }, []);


    return (
        <div>

            <Topbar currentPath='' />
            <div>
                <h2>Estados de Audiencias</h2>
                <SimpleLineChart title="prueba parametro" />

              
                <div>
                    <h2>tipos de Audiencias</h2>
                   
                </div>






            </div>

        </div>
    )
}

export default Home
