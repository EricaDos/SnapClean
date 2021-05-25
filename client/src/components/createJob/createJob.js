import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  //React hook and updates data in text field
  const [job, setJob] = useState({
    service: '',
    cleanerName: '',
    description: '',
    hourlyRate: ''

  });
//Function for onClick using axios to communicate with backend
//Onclick function will call for createJob function to be triggered from our routes within index.js
  const createJob = () => {
    axios.post('http://localhost:5000/jobs', job).then( () => {
      window.location.reload(false); //automatic reload when new item added
    })
  }

  return (
    <>
    <h2>Create Job </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Service" variant="outlined" value={job.service} onChange={(event) => {
        setJob({ ...job, service: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Job Description" variant="outlined"  value={job.description} onChange={(event) => {
        setJob({ ...job, description: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Cleaner Name" variant="outlined"  value={job.cleanerName} onChange={(event) => {
         setJob({ ...job, cleanerName: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Hourly Rate" variant="outlined"  value={job.hourlyRate} onChange={(event) => {
         setJob({ ...job, hourlyRate: event.target.value})
      }} />

      <Button varient="contained" color="primary" onClick={createJob}> Create Job </Button>

    </form>
    </>
  );
}
