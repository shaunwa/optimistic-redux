import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './thunks';

export const NewTodoForm = () => {
    const [newTodoText, setNewTodoText] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Add a new todo</h3>
            <input
                placeholder="Enter text here"
                value={newTodoText}
                onChange={e => setNewTodoText(e.target.value)} />
            <button onClick={() => {
                dispatch(createTodo(newTodoText))
                setNewTodoText('');
            }}>Submit</button>
        </div>
    )
}