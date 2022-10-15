import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoardsState, BoardsType, CreateBoardData } from "../types/redux";

import BoardApi from "../api/board";
import { AxiosResponse } from "axios";

export const createBoard = createAsyncThunk(
  "boards/create",
  async ({ board, column }: CreateBoardData, {}) => {
    try {
      const { data: boardData } = (await BoardApi.createBoard(
        board
      )) as AxiosResponse;
      const index = 1;

      const { data: columnData } = (await BoardApi.createColumn(
        column,
        index,
        boardData.id
      )) as AxiosResponse;

      return {
        id: boardData.id,
        title: board,
        columns: [
          {
            id: columnData.id,
            title: column,
            index: index,
            boardId: boardData.id,
          },
        ],
      } as BoardsType;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  boards: [],
} as BoardsState;

export const boardsSlice = createSlice({
  name: "boards",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBoard.fulfilled, (state, { payload }) => {
        if (payload) {
          state.boards.push(payload);
        }
      })
      .addCase(createBoard.rejected, (state, action) => {
        console.log(action);
      });
  },
});

// Action creators are generated for each case reducer function
// export const { updateDrivers } = boardsSlice.actions;

export default boardsSlice.reducer;
