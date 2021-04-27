import {
    LOAD_TODOS_LOADING,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,

    CREATE_TODO_LOADING,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAILURE,

    MARK_TODO_COMPLETED_LOADING,
    MARK_TODO_COMPLETED_SUCCESS,
    MARK_TODO_COMPLETED_FAILURE,

    DELETE_TODO_LOADING,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
} from './actions';

export const todosErrorReducer = (state = '', action) => {
    switch (action.type) {
    case LOAD_TODOS_FAILURE: {
        const error = action.payload;
        return error;
    }
    case CREATE_TODO_FAILURE:
    case MARK_TODO_COMPLETED_FAILURE:
    case DELETE_TODO_FAILURE: {
        // We're just replacing any existing error with the latest error
        const error = action.payload.errorMessage;
        return error;
    }
    default:
        return state;
    }
}

/*
    This is the optimistic todos reducer. Notice how
    it treats most "loading" events the same way that the
    non-optimistic reducer treats "success" events
*/
export const todosReducer = (state = [], action) => {
    switch (action.type) {
    case LOAD_TODOS_SUCCESS: {
        const todos = action.payload;
        return todos;
    }
    case CREATE_TODO_LOADING: {
        const newTodoText = action.payload;
        return state.concat({ id: 'new', text: newTodoText, isCompleted: false });
    }
    case CREATE_TODO_SUCCESS: {
        const newTodo = action.payload;
        return state.filter(todo => todo.id !== 'new').concat(newTodo);
    }
    case CREATE_TODO_FAILURE: {
        return state.filter(todo => todo.id !== 'new');
    }
    case MARK_TODO_COMPLETED_LOADING: {
        const todoId = action.payload;
        // This is just a way of replacing the old todo with the updated "completed" version
        return state.map(todo => {
            if (todo.id === todoId) return { ...todo, isCompleted: true };
            return todo;
        });
    }
    case MARK_TODO_COMPLETED_FAILURE: {
        const todoId = action.payload.todoId;
        // This is just a way of replacing the old todo with the updated "completed" version
        return state.map(todo => {
            if (todo.id === todoId) return { ...todo, isCompleted: false };
            return todo;
        });
    }
    case DELETE_TODO_LOADING: {
        const deletedTodoId = action.payload;
        // This is a way of removing the deleted todo from the store
        return state.filter(todo => todo.id !== deletedTodoId);
    }
    case DELETE_TODO_FAILURE: {
        // This one's a little tricky, we have to
        // replace the deleted todo, which requires us to modify
        // the action and thunk
        const todo = action.payload.todo;
        return state.concat(todo);
    }
    default:
        return state;
    }
}