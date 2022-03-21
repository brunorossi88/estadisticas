import React, { useEffect, useState } from 'react';
import { withTheme } from '@material-ui/styles';
import axios from 'axios';
import Contador from './Contador';
import Trimestres from './Trimestres';
import Topbar from '../Topbar';
import { Button, ButtonGroup, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';
import Chart5 from '../estadisticas/Chart5';
import ChartCausasCircunscripcion2020 from '../estadisticas/ChartCausasCircunscripcion2020';
import ChartCausasCircunscripcionTrimestres2020 from '../estadisticas/ChartCausasCircunscripcionTrimestres2020';



function Causas(props) {
  const { theme } = props;
  const t = props.title;




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
    consultaAPI();
  }, [url]);



  return (

    <div>

      <CssBaseline />
      <Topbar />

      <Grid container justify='center'>
        <Button color="primary" variant="contained">2017</Button>
        <Button color="primary" variant="contained">2018</Button>
        <Button color="primary" variant="contained">2019</Button>
        <Button color="primary" variant="contained">2020</Button>
        <Button color="primary" variant="contained">2021</Button>
        <Button color="primary" variant="contained">2022</Button>
      </Grid>

      <Grid container justify='center'>
        <Button color="primary" variant="contained">Circunscripción I</Button>
        <Button color="primary" variant="contained">Circunscripción II</Button>
        <Button color="primary" variant="contained">Circunscripción III</Button>

      </Grid>

      <Grid container justify="center"> Estadísticas de causas
        <Grid
          spacing={4}
          alignItems="center"
          justify="center"
          container
        >
          <Grid item xs={12} md={4}>
            <Paper>
              <div >
                <Chart5 />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  variant="contained"
                  href="#/penal"
                >
                  Ver
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <div >
                <Chart5 />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  variant="contained"
                >
                  Ver
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <div >
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color="secondary"
                  gutterBottom
                >
                  Causas
                </Typography>

                <Chart5 />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  variant="contained"

                  href="#/causas"
                >
                  Ver
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>







      <Grid container justify="center"> Estadísticas de causas
        <Grid
          spacing={4}
          alignItems="center"
          justify="center"
          container
        >
          <Grid item xs={12} md={4}>
            <Paper>
              <div >
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color="secondary"
                  gutterBottom
                >
                  Causas
                </Typography>

                <ChartCausasCircunscripcion2020 />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  variant="contained"
                  href="#/penal"
                >
                  Ver
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <div >
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color="secondary"
                  gutterBottom
                >
                  Causas
                </Typography>

              

                <ChartCausasCircunscripcionTrimestres2020 />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  variant="contained"
                >
                  Ver
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper >
              <div >
                <Typography
                  style={{ textTransform: "uppercase" }}
                  color="secondary"
                  gutterBottom
                >
                  Causas
                </Typography>

                <ChartCausasCircunscripcion2020 />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  variant="contained"

                  href="#/causas"
                >
                  Ver
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>







    </div>
  );
}

export default withTheme(Causas);