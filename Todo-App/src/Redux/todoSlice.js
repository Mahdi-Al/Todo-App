import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: () => {},
    editTodo: () => {},
    removeTodo: () => {},
  },
});
