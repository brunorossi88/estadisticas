import { Box, CardMedia, Grid } from '@material-ui/core'
import React from 'react'

const sistemas = require("../images/sistemas.png");

function LogoSistemas() {
    return (
        <div>
            <Grid container 
            alignItems="center"
            justify="center">                
                <Grid item xs={12} md={6}>
                   <CardMedia
                   image={sistemas}/>             
                </Grid>               
            </Grid>
        </div>
    )
}

export default LogoSistemas
