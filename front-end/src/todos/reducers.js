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
    
*/
export const todosReducer = (state = [], action) => {
    switch (action.type) {
    case LOAD_TODOS_SUCCESS: {
        const todos = action.payload;
        return todos;
    }
    case CREATE_TODO_SUCCESS: {
        const newTodo = action.payload;
        return state.concat(newTodo);
    }
    case MARK_TODO_COMPLETED_SUCCESS: {
        const updatedTodo = action.payload;
        // This is just a way of replacing the old todo with the updated "completed" version
        return state.map(todo => {
            if (todo.id === updatedTodo.id) return updatedTodo;
            return todo;
        });
    }
    case DELETE_TODO_SUCCESS: {
        const deletedTodoId = action.payload;
        // This is a way of removing the deleted todo from the store
        return state.filter(todo => todo.id !== deletedTodoId);
    }
    default:
        return state;
    }
}