import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../../feature/post/postSlice";
import userReducer from "../../feature/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
