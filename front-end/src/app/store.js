import { configureStore } from '@reduxjs/toolkit';
import { todosErrorReducer, todosReducer } from '../todos/reducers';

export const store = configureStore({
    reducer: {
        todosError: todosErrorReducer,
        todos: todosReducer,
    },
});
