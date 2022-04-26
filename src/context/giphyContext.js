import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  search: "",
  data: [],
  singleGifDetails: [],
  pending: false,
  error: false,
};

export const fetchGiphy = createAsyncThunk("giphys/update", async () => {
  const results = await axios("https://api.giphy.com/v1/gifs/trending", {
    params: {
      api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
      limit: 100,
    },
  });

  return results.data.data;
});
export const fetchSearchGiphy = createAsyncThunk(
  "giphysearch/update",
  async (search) => {
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
        q: search,
        limit: 100,
      },
    });

    return results.data.data;
  }
);
export const getGiphyDetails = createAsyncThunk(
  "giphydetails/update",
  async (gif_id) => {
    const results = await axios(`https://api.giphy.com/v1/gifs/${gif_id}`, {
      params: {
        api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
        gif_id,
        limit: 100,
      },
    });
    console.log(results.data.data);
    return results.data.data;
  }
);
export const giphySlice = createSlice({
  name: "giphy",
  initialState,
  reducers: {
    getGiphys: async (state, action) => {
      state.data = action.payload;
      state.isError = false;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [fetchGiphy.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchGiphy.fulfilled]: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    [fetchGiphy.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [fetchSearchGiphy.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchSearchGiphy.fulfilled]: (state, action) => {
      state.pending = false;
      state.data = action.payload;
    },
    [fetchSearchGiphy.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [getGiphyDetails.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getGiphyDetails.fulfilled]: (state, action) => {
      state.pending = false;
      state.singleGifDetails = action.payload;
    },
    [getGiphyDetails.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getGiphys } = giphySlice.actions;

export default giphySlice.reducer;
