import { useDispatch } from 'react-redux';
import { markTodoCompleted, deleteTodo } from './thunks';

export const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{todo.text}</h3>
            {todo.isCompleted
                ? <p>Completed!</p>
                : <p>Incomplete</p>}
            <button onClick={() => dispatch(markTodoCompleted(todo.id))}>Complete</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    );
}