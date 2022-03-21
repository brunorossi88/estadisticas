import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


import InstructionDialog from "./dialogs/InstructionDialog";
import SwipeDialog from "./dialogs/SwipeDialog";

import Topbar from "./Topbar";
import { Home, Visibility } from "@material-ui/icons";

const backgroundShape = require("../images/shape.svg");

const sistemas = require("../images/sistemas.png");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%"
  }
});

class Penal extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() { }

  openDialog = event => {
    this.setState({ learnMoredialog: true });
  };

  dialogClose = event => {
    this.setState({ learnMoredialog: false });
  };

  openGetStartedDialog = event => {
    this.setState({ getStartedDialog: true });
  };

  closeGetStartedDialog = event => {
    this.setState({ getStartedDialog: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={4}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Familia
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Estadísticas relacionadas a Familia<br /> Por cámara/Circunscripción
                    </Typography>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.actionButtom}
                    >
                      Ver
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Oficina Judicial
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Estadísticas relacionadas a la Oficina Judicial<br /> Por cámara/Circunscripción
                    </Typography>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.actionButtom}
                    >
                      Ver
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Mediación
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Estadísticas relacionadas a mediaciones<br /> Por cámara/Circunscripción
                    </Typography>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      color="primary"
                      variant="contained"
                      className={classes.actionButtom}
                      href="#/home"
                    >
                      Ver
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div style={{ display: "flex", justifyContent: "center", background: "white" }}>
          <img src={sistemas} />
        </div>

      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Penal));
