import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const todosSlice = createSlice({
  name: "todos",
  initialState: [...data],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title, content, date } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.Content = content;
        existingTodo.date = date;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer; // This is the default export
