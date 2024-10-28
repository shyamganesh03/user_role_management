import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  role: "",
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      return { ...state, username: action?.payload };
    },
    setRole: (state, action) => {
      return { ...state, role: action?.payload };
    },
  },
});

export const { setUsername, setRole } = userReducer.actions;

export default userReducer.reducer;
