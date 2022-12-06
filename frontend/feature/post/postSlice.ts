import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_POSTS } from "../../lib/apollo/query";
import { RootState } from "../../lib/redux/store";
import { Post, PostState } from "./postType";

const initialState: PostState = {
  data: [],
  status: "idle",
};

export const getPosts = createAsyncThunk(
  "getPosts",
  async (): Promise<Post[]> => {
    const res = await client.query({
      query: GET_POSTS,
    });
    const data: Post[] = res.data.posts.nodes;
    return data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
