import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BoardsState, BoardsType, ColumnType } from "../types/redux";
import { useLocation } from "react-router-dom";

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
    const href = `/boards/${board.toLowerCase().replace(" ", "-")}`;

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
        auth.userId!,
        href
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

export const createColumn = createAsyncThunk(
  "column/create",
  async (data: string[], { getState }) => {
    try {
      const {
        boards: { activeBoard },
      } = getState() as RootState;

      // Transform form object values into array
      const dataArr = Object.entries(data).map(([key, value]) => {
        return {
          [key]: value,
        };
      });

      const column = dataArr.find((item) => item["column"])!.column;
      const tasksArr = dataArr.filter(
        (item) => !Object.keys(item).includes("column")
      );

      // Create column
      const { data: columnResponseData } = (await BoardApi.createColumn(
        column,
        activeBoard!.columns.length,
        activeBoard!.id
      )) as AxiosResponse;

      // Create tasks with returned columnId
      const tasks = tasksArr.map((task, index) => ({
        title: task[`task-${index + 1}`],
        index,
        columnId: columnResponseData.id,
      }));

      // Create tasks with returned columnId
      (await BoardApi.createMultipleTasks(
        tasks,
        columnResponseData.id
      )) as AxiosResponse;

      // Get updated user data after column and tasks have been created
      const { data: boardResponseData } = (await BoardApi.getBoard(
        activeBoard!.id
      )) as AxiosResponse;

      return boardResponseData;
    } catch (err) {}

    // const values = Object.values(data);
    // console.log(values);
    // console.log(getState());
    // const tasksArr = [...values.slice(1)] as string[];
    // const tasks = tasksArr.map((task, index) => {
    //   return {
    //     title: task,
    //     index,
    //   }
    // })
    // try {
    //   const response = BoardApi.createTask(title, index, columnId);

    //   return response;
    // } catch (err) {
    //   console.log(err);
    // }
  }
);

export const createTask = createAsyncThunk(
  "task/create",
  async (
    // {
    //   title,
    //   index,
    //   columnId,
    // }: { title: string; index: number; columnId: number },
    data: any,
    { getState }
  ) => {
    const values = Object.values(data);
    console.log(values);
    console.log(getState());
    const location = useLocation();
    console.log(location);
    // try {
    //   const response = BoardApi.createTask(title, index, columnId);

    //   return response;
    // } catch (err) {
    //   console.log(err);
    // }
  }
);

const initialState = {
  boards: [],
  activeBoard: null,
} as BoardsState;

export const boardsSlice = createSlice({
  name: "boards",
  initialState: initialState,
  reducers: {
    updateBoards: (state, action) => {
      state.boards = action.payload;
    },
    setActiveBoard: (state, action) => {
      console.log(action);
      state.activeBoard = action.payload;
    },
  },
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
      })
      .addCase(createColumn.fulfilled, (state, { payload }) => {
        const newState = state.boards.filter(
          (board) => board.id !== payload.id
        );
        state.boards = [...newState, payload];
        state.activeBoard = payload;
      })
      .addCase(createColumn.rejected, (state, action) => {
        console.log(action);
      });
    // .addCase(updateBoard.fulfilled, (state, { payload }) => {
    //   state.boards = payload;
    //   // if (payload) {
    //   //   state.boards.push(payload);
    //   // }
    // })
    // .addCase(updateBoard.rejected, (state, action) => {
    //   console.log(action);
    // });
  },
});

// Action creators are generated for each case reducer function
export const { updateBoards, setActiveBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
