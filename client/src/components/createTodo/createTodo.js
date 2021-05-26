import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function CreateTodo() {
  const classes = useStyles();
  //React hook and updates data in text field
  const [todo, setTodo] = useState({
    todo: ''

  });


//Function for onClick using axios to communicate with backend
//Onclick function will call for createTodo function to be triggered from our routes within index.js
  const createTodo = () => {
    axios.post('http://localhost:5000/todos', todo).then( () => {
      window.location.reload(false); //automatic reload when new item added
    })
  }




  return (
    <>
    <h2>Create Todo </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Item" variant="outlined" value={todo.item} onChange={(event) => {
        setTodo({ ...todo, item: event.target.value})
      }} />


      <Button varient="contained" color="primary" onClick={createTodo}> Create Todo </Button>

    </form>


    </>
  );
}
