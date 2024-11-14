import { configureStore } from "@reduxjs/toolkit";
// import { cartTodoReducer } from "./cartTodoSlice";

const store = configureStore({
  reducer: {
    // cartTodo: cartTodoReducer,
  },
});

export { store };
