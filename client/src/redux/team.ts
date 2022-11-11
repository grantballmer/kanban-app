import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardsState, BoardsType, CreateBoardData } from "../types/redux";

import BoardApi from "../api/board";
import { AxiosResponse } from "axios";

export const createTeam = createAsyncThunk(
  "team/create",
  async ({ board, column }: CreateBoardData, {}) => {
    try {
      return;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  boards: [],
  activeBoard: null,
} as BoardsState;

export const boardsSlice = createSlice({
  name: "team",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTeam.fulfilled, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(createTeam.rejected, (state, action) => {
        console.log(action);
      });
  },
});

// Action creators are generated for each case reducer function
// export const { updateDrivers } = boardsSlice.actions;

export default boardsSlice.reducer;
