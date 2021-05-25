import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Job from './components/showJob/showJob.js';
import Create from './components/createJob/createJob.js';
import './App.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles();


function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <h1>SnapClean</h1>
        <Container maxWidth="lg">
          <AppBar className={classes.appBar}>
            <Typography className={classes.heading} variant="h2" align="center">
            Jobs Create & Display </Typography>
          </AppBar>

          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="strect">
                <Grid item xs={12} sm={8}>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <Job />
                  </AppBar>
                </Grid>
                <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Create />
                  </AppBar>
                </Grid>
              </Grid>
        </Container>
        </Grow>
        </Container>
    </div>
  );
}

export default App;
