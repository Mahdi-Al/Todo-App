import { createSlice } from "@reduxjs/toolkit";

import data from "../../data.json";

const cartTodoSlice = createSlice({
  name: "cart",
  initialState: data,
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { create } = cartTodoSlice.actions;
export default cartTodoSlice.reducer;
