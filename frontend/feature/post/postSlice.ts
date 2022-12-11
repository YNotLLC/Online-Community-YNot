import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../lib/apollo/apollo";
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
    interface Res {
      categories: {
        nodes: [
          {
            __typename: string;
            name: string;
          }
        ];
      };
      postId: number;
      content: string;
      date: string;
      title: string;
      __typename: string;
    }
    const data: Res[] = res.data.posts.nodes;
    const modifiedData: Post[] = [];
    data.map((post) => {
      modifiedData.push({
        id: post.postId,
        category: post.categories.nodes[0].name,
        content: post.content,
        title: post.title,
        uploadedAt: post.date.replace("T", " "),
      });
    });
    return modifiedData;
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
