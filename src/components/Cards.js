import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import CardItem from "./cards/CardItem";
import Topbar from "./Topbar";
import SectionHeader from "./typo/SectionHeader";
import CardItem2 from "./cards/CardItem2";
const backgroundShape = require("../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

class Cards extends Component {
  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">           
              <Grid item xs={12}>
                <SectionHeader
                  title="Cards"
                  subtitle="One page with a list of a collection"
                />
                <CardItem />
                <CardItem />
                <CardItem2 />
              </Grid>
          
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Cards);
