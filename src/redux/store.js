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
        ignoredActionPaths: [
          "payload.dtCreatedOn",
          "payload.objProfile.dtCreatedOn",
          "payload.setProfile",
        ],
        ignoredPaths: [
          "loggedUser.value.dtCreatedOn",
          "loggedUser.value.objProfile.dtCreatedOn",
          "loggedUser.value.setProfile",
        ],
      }, //false
    }),
});

/**
 * @typedef {ReturnType<typeof store.getState>} RootState
 */

export default store;
