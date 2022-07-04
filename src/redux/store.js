import { configureStore } from "@reduxjs/toolkit";
import logedUserReducer from "./states/logedUserSlice";

const store = configureStore({
  reducer: {
    counter: logedUserReducer,
    //another Reducer
  },
});

/**
 * @typedef {ReturnType<typeof store.getState>} RootState
 */

export default store;
