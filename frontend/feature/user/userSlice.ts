import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../lib/firebase/firebase";
import { RootState } from "../../lib/redux/store";
import { User, UserState } from "./userType";
// import { User, UserState } from "./userType";

const initialState: UserState = {
  data: undefined,
  status: "idle",
  isLoggedIn: false,
};

const provider = new GoogleAuthProvider();

export const login = createAsyncThunk(
  "login",
  async (auth: Auth): Promise<User> => {
    const res = await signInWithPopup(auth, provider);
    return {
      uid: res.user.uid,
      email: res.user.email,
      name: res.user.displayName,
    };
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      state.status = "succeeded";
      state.isLoggedIn = true;
    },
    removeUser: (state) => {
      state.data = undefined;
      state.status = "pending";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      state.isLoggedIn = true;
      if (action.payload.uid)
        setDoc(doc(db, "users", action.payload.uid), {
          name: action.payload.name,
          email: action.payload.email,
        });
    });
    builder.addCase(login.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
