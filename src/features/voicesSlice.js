import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVoicesFromApi = createAsyncThunk("voices/fetch-from-api", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/voices/fetch");

    return response.statusText;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchVoices = createAsyncThunk("voices/fetch", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/voices");

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const voicesSlice = createSlice({
  name: "voices",
  initialState: {
    voices: [],
    loading: false,
    status: "",
    error: "",
  },
  extraReducers: {
    [fetchVoices.pending]: (state) => {
      state.loading = true;
    },
    [fetchVoices.fulfilled]: (state, action) => {
      state.loading = false;
      state.voices = action.payload;
    },
    [fetchVoices.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [fetchVoicesFromApi.pending]: (state) => {
      state.loading = true;
    },
    [fetchVoicesFromApi.fulfilled]: (state, action) => {
      state.status = action.payload;
      state.loading = false;
    },
    [fetchVoicesFromApi.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "";
      state.loading = false;
    },
  },
});

const selectVoicesState = (state) => state.voices;

export const selectVoices = (lang) =>
  createSelector(selectVoicesState, (state) =>
    state.voices.filter((item) => item.language === lang)
  );
export const selectLoading = createSelector(selectVoicesState, (state) => state.loading);
export const selectError = createSelector(selectVoicesState, (state) => state.error);
export const selectStatus = createSelector(selectVoicesState, (state) => state.status);

export const selectLanuages = createSelector(selectVoicesState, (state) => {
  const languagesSet = new Set();

  state.voices.forEach((item) => languagesSet.add(item.language));

  const languages = [];
  for (let value of languagesSet) languages.push(value);

  return languages;
});

export default voicesSlice.reducer;
