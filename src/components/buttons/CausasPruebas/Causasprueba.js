import { Button, CssBaseline, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Chart2 from '../../estadisticas/Chart2';
import Topbar from '../../Topbar'

function Causasprueba() {

    const [circunscripcion, setCircunscripcion] = useState('0');

    const MostrarGrafico = () => {

        if (circunscripcion != '0') {
            return (
                <div>
                    <Chart2 circunscripcion={circunscripcion} />
                </div>
            )
        }
        else
        {
            return (
                <div>               

                </div>
            )
        }
    }




    return (


        <div>
            <CssBaseline />
            <Topbar />

            <Button onClick={() => {
                //setCircunscripcion('I');             
            }} ></Button>

            <Grid container justify='center'>
                <Button color="primary" variant="contained" onClick={() => {
                    setCircunscripcion('I');
                }}>Circunscripción I</Button>
                <Button color="primary" variant="contained" onClick={() => {
                    setCircunscripcion('II');
                }}>Circunscripción II</Button>
                <Button color="primary" variant="contained" onClick={() => {
                    setCircunscripcion('III');
                }}>Circunscripción III</Button>

            </Grid>

            <MostrarGrafico />

        </div>


    )
}

export default Causasprueba