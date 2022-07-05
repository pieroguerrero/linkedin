import { shapeUser } from "../../models/User";
import { createSlice } from "@reduxjs/toolkit";

const EmptyUserState = shapeUser("", "", "", "", "", new Date(0), false);

const logedUserSlice = createSlice({
  name: "user",
  initialState: {
    value: EmptyUserState,
  },
  reducers: {
    setLoggedUser: (state, action) => {
      state.value = action.payload;
    },
    clearLogedUser: (state) => {
      state.value = EmptyUserState;
    },
  },
});

const { setLoggedUser, clearLogedUser } = logedUserSlice.actions;
const logedUserReducer = logedUserSlice.reducer;

export default logedUserReducer;
export { setLoggedUser, clearLogedUser, EmptyUserState, logedUserSlice };
