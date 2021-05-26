
import React, { Component, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Grid, Typography, Container, Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const initialState = { firstName: '', lastName: '' , email: '', password:'', confirmPassword: ''};
const Auth = () => {
  const classes = useStyles();
  //will determine if logged in based on our variable and changes within our form will update accordingly

  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history))
    }else {
      dispatch(signin(formData, history))

    }
  };
//each input uses handleChange to create our changes on our json file
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

//Will allow for the switching between login and registeration
  const switchMode = () => {
    setIsSignup((prevIsIsSignup) => !prevIsIsSignup);
    handleShowPassword(false);
  };

  return (
    <Container component="main">
    <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
        </ Paper>
    </ Container>
  );
};

export default Auth;
