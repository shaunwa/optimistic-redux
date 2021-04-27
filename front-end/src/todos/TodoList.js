import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos }) => {
    return (
        <>
        {todos.map(todo => (
            <TodoListItem key={todo.id || 'new'} todo={todo} />
        ))}
        </>
    );
}