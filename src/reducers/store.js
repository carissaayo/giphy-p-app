import { configureStore } from "@reduxjs/toolkit";
import giphyReducer from "../context/giphyContext";

export const store = configureStore({
  reducer: {
    giphy: giphyReducer,
  },
});
