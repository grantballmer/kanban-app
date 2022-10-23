import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "./boards";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    boards: boardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
