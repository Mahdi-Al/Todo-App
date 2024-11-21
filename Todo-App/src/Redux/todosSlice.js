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
      console.log(action.payload);
      console.log(existingTodo); // This should log the existing todo if found
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.content = content; // Ensure this matches the todo structure
        existingTodo.date = date;
      } else {
        console.error(`Todo with id ${id} not found`);
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer; // This is the default export
