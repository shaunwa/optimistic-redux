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
            const response = await axios.post('/todos', { text: newTodoText, isCompleted: false });
            const newTodo = response.data;
            dispatch(createTodoSuccess(newTodo));
        } catch (error) {
            alert('Sorry, couldn\'t create that todo, please try again');
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
            alert('Sorry, couldn\'t mark that todo as completed, please try again');
            dispatch(markTodoCompletedFailure(todoId, error.message));
        }
    }

export const deleteTodo = (todo) =>
    async (dispatch) => {
        dispatch(deleteTodoLoading(todo.id));
        try {
            await axios.delete(`/todos/${todo.id}`);
            dispatch(deleteTodoSuccess(todo.id));
        } catch (error) {
            alert('Sorry, couldn\'t delete that todo, please try again');
            dispatch(deleteTodoFailure(todo, error.message));
        }
    }