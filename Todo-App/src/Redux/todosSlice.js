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
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer; // This is the default export
