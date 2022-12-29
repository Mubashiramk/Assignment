import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getPost = createAsyncThunk("users/getPost", async () => {
  const response = await axios.get(
    `https://api.unsplash.com/users/photos/?client_id=${process.env.REACT_APP_API_KEY}`
  );
  return response.json();
});
export const postSlice = createSlice({
  name: "post",
  initialState: {
    data: {},
    loading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getPost.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});
export default postSlice.reducer;
