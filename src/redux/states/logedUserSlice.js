import { shapeUser } from "../../models/User";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState = shapeUser("", "", "", "", "", new Date(0));

export const logedUserSlice = createSlice({
  name: "user",
  initialState: {
    value: EmptyUserState,
  },
  reducers: {
    setLogedUser: (state, action) => {
      state.value = action.payload;
    },
    clearLogedUser: (state) => {
      state.value = EmptyUserState;
    },
  },
});

export const { setLogedUser, clearLogedUser } = logedUserSlice.actions;

const logedUserReducer = logedUserSlice.reducer;
export default logedUserReducer;
