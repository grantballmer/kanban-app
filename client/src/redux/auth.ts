import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthState } from "../types/redux";
import { auth } from "../firebase/config";
import { AuthApi } from "../api/auth";
import { AxiosResponse } from "axios";

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }: { email: string; password: string }, {}) => {
    try {
      const firebaseResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const dbResponse = await AuthApi.createUser(firebaseResponse.user.uid);

      return dbResponse;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  userId: null,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(signup.rejected, (state, action) => {
        console.log(action);
      });
  },
});

// Action creators are generated for each case reducer function

export default authSlice.reducer;
