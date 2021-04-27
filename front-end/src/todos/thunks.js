import axios from 'axios';
import {
    loadTodosLoading,
    loadTodosSuccess,
    loadTodosFailure,

    createTodoLoading,
    createTodoSuccess,
    createTodoFailure,

    markTodoCompletedLoading,
    markTodoCompletedSuccess,
    markTodoCompletedFailure,

    deleteTodoLoading,
    deleteTodoSuccess,
    deleteTodoFailure,
} from './actions';

export const loadTodos = () =>
    async (dispatch) => {
        dispatch(loadTodosLoading());
        try {
            const response = await axios.get('/todos');
            const todos = response.data;
            dispatch(loadTodosSuccess(todos));
        } catch (error) {
            dispatch(loadTodosFailure(error.message));
        }
    }

export const createTodo = (newTodoText) =>
    async (dispatch) => {
        dispatch(createTodoLoading(newTodoText));
        try {
            const response = await axios.post('/todos', { text: newTodoText, isComplete: false });
            const newTodo = response.data;
            dispatch(createTodoSuccess(newTodo));
        } catch (error) {
            dispatch(createTodoFailure(newTodoText, error.message));
        }
    }

export const markTodoCompleted = (todoId) =>
    async (dispatch) => {
        dispatch(markTodoCompletedLoading(todoId));
        try {
            const response = await axios.put(`/todos/${todoId}`);
            const updatedTodo = response.data;
            dispatch(markTodoCompletedSuccess(updatedTodo));
        } catch (error) {
            dispatch(markTodoCompletedFailure(todoId, error.message));
        }
    }

export const deleteTodo = (todoId) =>
    async (dispatch) => {
        dispatch(deleteTodoLoading(todoId));
        try {
            await axios.delete(`/todos/${todoId}`);
            dispatch(deleteTodoSuccess(todoId));
        } catch (error) {
            dispatch(deleteTodoFailure(todoId, error.message));
        }
    }