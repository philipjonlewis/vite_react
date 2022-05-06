import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: "philip",
    password: "lewis",
    isEmailVerified: "",
    isBlocked: "",
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      // validation code should be here
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
      state.isAuthenticated = true;

    
    },
    logout: (state, action) => {
      state = action.payload;
      console.log(state);
      <Navigate to="/" />;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
