import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BoardsState,
  BoardsType,
  ColumnType,
  CreateBoardData,
} from "../types/redux";

import BoardApi from "../api/board";
import { AxiosResponse } from "axios";
import { RootState } from "./store";

export const createBoard = createAsyncThunk(
  "boards/create",
  async (data: string[], { getState }) => {
    const { auth } = getState() as RootState;

    const dataArr = Object.entries(data).map(([key, value]) => {
      return {
        [key]: value,
      };
    });

    const board = dataArr.find((item) => item["board"])!.board;
    const columns = dataArr.filter(
      (item) => !Object.keys(item).includes("board")
    );

    columns.sort((a, b) => {
      const keyA = Object.keys(a)[0];
      const keyB = Object.keys(b)[0];
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });

    try {
      const { data: boardData } = (await BoardApi.createBoard(
        board,
        auth.userId!
      )) as AxiosResponse;

      const columnsDataArr: ColumnType[] = [];

      await Promise.all(
        columns.map(async (column, index) => {
          const value = Object.values(column)[0];

          const { data: columnDataResponse } = (await BoardApi.createColumn(
            value,
            index + 1,
            boardData.id
          )) as AxiosResponse;
          columnsDataArr.push({
            id: columnDataResponse.id,
            title: columnDataResponse.title,
            index: columnDataResponse.index,
            boardId: boardData.id,
          });
        })
      );

      return {
        id: boardData.id,
        title: board,
        columns: columnsDataArr,
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
        console.log(payload);
        // if (payload) {
        //   state.boards.push(payload);
        // }
      })
      .addCase(createBoard.rejected, (state, action) => {
        console.log(action);
      });
  },
});

// Action creators are generated for each case reducer function
// export const { updateDrivers } = boardsSlice.actions;

export default boardsSlice.reducer;
