import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewTodoForm } from './todos/NewTodoForm';
import { TodoList } from './todos/TodoList';
import { getTodos, getTodosError } from './todos/selectors';
import { loadTodos } from './todos/thunks';
import './App.css';

function App() {
    const todosError = useSelector(getTodosError);
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);
    
    return (
        <div className="App">
            <NewTodoForm />
            {todosError && <p>{todosError}</p>}
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
