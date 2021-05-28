import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// Importing our component
import Job from './components/showJob/showJob.js';
import Create from './components/createJob/createJob.js';

import ShowTodo from './components/showTodo/showTodo.js';
import CreateTodo from './components/createTodo/createTodo.js';
import Auth from './components/auth/auth.js';
import Login from './components/login/login.js';
import Signup from './components/signup/signup.js';





import './App.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles();


function App() {
  const classes = useStyles();
  return (

    <div className="App">
    // Navbar using Link to allow for switching

    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>SnapClean</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>Sign Up</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/todos"}>ToDo</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/jobs"}>Jobs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/showJobs"}>Show Jobs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/showTodos"}> Show ToDo</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>


          <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Job} />

              <Route path="/todos" component={CreateTodo} />
              <Route path="/showTodos" component={ShowTodo} />
                <Route path="/auth" component={Auth} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />

              <Route path="/jobs" component={Create} />
              <Route path="/showJobs" component={Job} />



            </Switch>
          </div>
        </div>
      </div>
      // </Router>

  );
}

export default App;
