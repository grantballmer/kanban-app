import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthState } from "../types/redux";
import { auth } from "../firebase/config";
import { AuthApi } from "../api/auth";
import axios, { AxiosResponse } from "axios";
import { setActiveBoard, updateBoards } from "./boards";

interface CreateUserResponse extends AxiosResponse {
  id: string;
  team_id: string | null;
}

export const getUserData = createAsyncThunk(
  "auth/getuser",
  async (id: string, { dispatch }) => {
    try {
      const { data } = (await AuthApi.getUserData(id)) as AxiosResponse;

      const { response } = data;

      dispatch(updateBoards(response.boards));
      dispatch(setActiveBoard(response.boards[0]));

      return data.response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const firebaseResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { data } = (await AuthApi.createUser(
        firebaseResponse.user.uid
      )) as AxiosResponse;

      return data.response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { dispatch }
  ) => {
    try {
      const firebaseResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { data } = (await AuthApi.getUserData(
        firebaseResponse.user.uid
      )) as AxiosResponse;

      const { response } = data;

      dispatch(updateBoards(response.boards));
      dispatch(setActiveBoard(response.boards[0]));

      return data.response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (data, {}) => {
  try {
    await signOut(auth);

    return;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  userId: null,
  loading: true,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, { payload }) => {
        const { id } = payload as CreateUserResponse;
        state.userId = id;
      })
      .addCase(signup.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { id } = payload as CreateUserResponse;
        state.userId = id;
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.userId = null;
      })
      .addCase(logout.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.userId = payload.id;
      })
      .addCase(getUserData.rejected, (state, action) => {
        console.log(action);
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
