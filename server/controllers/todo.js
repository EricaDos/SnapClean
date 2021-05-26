import TodoData from '../models/todo.js'


export const getTodos = async(req, res) => {
  try{
      const allTodos = await TodoData.find(); //Goes through todo models and saves in allTodos

      res.status(200).json(allTodos); //Sends todos through the client
  } catch (error){
      res.status(404).json({ message: error.message });
  }
}


export const createTodo = async (req, res) => {
  const todo = req.body;

  const newTodo = new TodoData(todo)

  try {

    await newTodo.save();
      res.status(201).json(newTodo);
  } catch (error) {
      res.status(404).json({ message: error.message });

    }

}

export const deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
      await TodoData.findByIdAndRemove(id).exec();
      res.send('Successfully Deleted')
  } catch (error) {
      console.log(error);
    }

}
