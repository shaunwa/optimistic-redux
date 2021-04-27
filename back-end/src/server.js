import express from 'express';
import { v4 as uuid } from 'uuid';

const app = express();

app.use(express.json());

// We'll use this as a fake database
let todos = [];

// We'll use this to slow down the server endpoints and really
// see the difference between optimistic and realistic ui
// app.use((req, res, next) => setTimeout(() => next(), 2000));

// For loading all the todos
app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

// Creates a new todo and sends it back to the client
app.post('/todos', (req, res) => {
    const newTodoInfo = req.body;
    const newTodo = {
        id: uuid(),
        ...newTodoInfo,
    }
    todos.push(newTodo);
    res.status(200).json(newTodo);
});

// Marks a todo as completed and send it back to the client
app.put('/todos/:todoId', (req, res) => {
    const { todoId } = req.params;
    const todo = todos.find(todo => todo.id === todoId);
    todo.isCompleted = true;
    res.status(200).json(todo);
});

// Delete a todo
app.delete('/todos/:todoId', (req, res) => {
    const { todoId } = req.params;
    todos = todos.filter(todo => todo.id !== todoId);
    res.sendStatus(200);
});

app.listen(8080, () => console.log('Server is listening on port 8080'));