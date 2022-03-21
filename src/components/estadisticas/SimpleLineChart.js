import React, { useEffect, useState } from 'react';
import { withTheme } from '@material-ui/styles';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Trimestres from '../actuaciones/Trimestres';
import Chart1 from './ChartCausasCircunscripcionTrimestres2020';

function SimpleLineChart(props) {
  const { theme } = props;
  const t = props.title;

  const contador = useSelector(state => state.numero)
  const dispatch = useDispatch();


  const [url, setURL] = useState('https://localhost:44322/api/Post/estados/I');
  const [respuestaAPI, setRespuestaAPI] = useState([]);

  const [value, setValue] = React.useState('I');

  const handleChange = (event) => {
    setValue(event.target.value);
    setURL('https://localhost:44322/api/Post/estados/' + event.target.value);   
  };


  const consultaAPI = async () => {
    const consulta = await axios({ url });
    setRespuestaAPI(consulta.data);
  };



   useEffect(() => {
    //consultaAPI();   
    //consultaAPI_T(); 
  }, [url]);


  return (

    <div>
      <div>
        
        <h3>{contador}</h3>           

        <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>-</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Volver a 0</button>
        <button onClick={() => dispatch({ type: 'SUMAR10' })}>Sumar 10</button>
      </div>


     

      <Trimestres/>

      <Chart1/>

    </div>
  );
}

export default withTheme(SimpleLineChart);