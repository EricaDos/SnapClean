import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function ShowJob() {
  const classes = useStyles();

  const [jobsList, setJobList] = useState([]);

  const deleteJob = (id) => {
    axios.delete(`http://localhost:5000/jobs/${id}`).then( () => {
      window.location.reload(false);
    })
  }




  useEffect(() => {
    axios.get('http://localhost:5000/jobs').then( (allJobs) => {
      setJobList(allJobs.data);
    })
  }, []);




  return (

    <>
    <h2>Jobs</h2>


    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hourly Rate</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobsList.map((job, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {job.service}
              </TableCell>
              <TableCell align="right">{job.description}</TableCell>
              <TableCell align="right">{job.hourlyRate}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteJob(job._id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>



              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
