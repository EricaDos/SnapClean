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



export default function ShowTodo() {
  const classes = useStyles();

  const [todosList, setTodoList] = useState([]);

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todo/${id}`).then( () => {
      window.location.reload(false);
    })
  }

  useEffect(() => {
    axios.get('http://localhost:5000/todo').then( (allTodos) => {
      setTodoList(allTodos.data);
    })
  }, []);




  return (

    <>
    <h2>Your ToDo List</h2>


    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Items</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {todosList.map((todo, key) => (
            <TableRow key={key}>
        
              <TableCell align="right">{todo.item}</TableCell>

              <TableCell align="right">
              <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteTodo(todo._id)}>
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
