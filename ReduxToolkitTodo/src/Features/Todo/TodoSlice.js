import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello world", completed: false }]
}




export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload)
            if (todo) todo.completed = !todo.completed
        },
        updateTodoText: (state, action) => {
            const { id, text } = action.payload
            const todo = state.todos.find((t) => t.id === id)
            if (todo) todo.text = text
        },

    }
})

export const { addTodo, removeTodo, toggleTodo, updateTodoText } = todoSlice.actions


export default todoSlice.reducer