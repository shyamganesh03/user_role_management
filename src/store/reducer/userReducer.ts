import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    role: "",
  },
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.user.username = action.payload;
    },
    setRole: (state, action) => {
      state.user.role = action.payload;
    },
  },
});

export const { setUsername, setRole } = userReducer.actions;

export default userReducer.reducer;
