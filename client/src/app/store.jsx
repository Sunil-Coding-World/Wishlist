import { configureStore } from "@reduxjs/toolkit";
import userdetail from './../APi/InputSlice';
export const store = configureStore({
  reducer: {
    app: userdetail,
  },
});