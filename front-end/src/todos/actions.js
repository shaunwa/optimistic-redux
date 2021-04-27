/*
    Here are all the action types and action creators for our app.
    Yes, it would probably be a good idea to have some helper function
    that creates all of these for us, but for clarity, I've defined them
    all one-by-one
*/
export const LOAD_TODOS_LOADING = 'LOAD_TODOS_LOADING';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

export const CREATE_TODO_LOADING = 'CREATE_TODO_LOADING';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';

export const MARK_TODO_COMPLETED_LOADING = 'MARK_TODO_COMPLETED_LOADING';
export const MARK_TODO_COMPLETED_SUCCESS = 'MARK_TODO_COMPLETED_SUCCESS';
export const MARK_TODO_COMPLETED_FAILURE = 'MARK_TODO_COMPLETED_FAILURE';

export const DELETE_TODO_LOADING = 'DELETE_TODO_LOADING';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const loadTodosLoading = () => ({ type: LOAD_TODOS_LOADING });
export const loadTodosSuccess = (todos) => ({ type: LOAD_TODOS_SUCCESS, payload: todos });
export const loadTodosFailure = (errorMessage) => ({ type: LOAD_TODOS_FAILURE, payload: errorMessage });

export const createTodoLoading = (newTodoText) => ({ type: CREATE_TODO_LOADING, payload: newTodoText });
export const createTodoSuccess = (newTodo) => ({ type: CREATE_TODO_SUCCESS, payload: newTodo });
export const createTodoFailure = (todoInfo, errorMessage) => ({ type: CREATE_TODO_FAILURE, payload: { todoInfo, errorMessage } });

export const markTodoCompletedLoading = (todoId) => ({ type: MARK_TODO_COMPLETED_LOADING, payload: todoId });
export const markTodoCompletedSuccess = (updatedTodo) => ({ type: MARK_TODO_COMPLETED_SUCCESS, payload: updatedTodo });
export const markTodoCompletedFailure = (todoId, errorMessage) => ({ type: MARK_TODO_COMPLETED_FAILURE, payload: { todoId, errorMessage } });

export const deleteTodoLoading = (todoId) => ({ type: DELETE_TODO_LOADING, payload: todoId });
export const deleteTodoSuccess = (todoId) => ({ type: DELETE_TODO_SUCCESS, payload: todoId });
export const deleteTodoFailure = (todo, errorMessage) => ({ type: DELETE_TODO_FAILURE, payload: { todo, errorMessage } });