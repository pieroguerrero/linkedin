import { configureStore } from "@reduxjs/toolkit";
import logedUserReducer from "./states/logedUserSlice";

const store = configureStore({
  reducer: {
    loggedUser: logedUserReducer,
    //another Reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload.dtCreatedOn"],
        ignoredPaths: ["loggedUser.value.dtCreatedOn"],
      }, //false
    }),
});

/**
 * @typedef {ReturnType<typeof store.getState>} RootState
 */

export default store;
