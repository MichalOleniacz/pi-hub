import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const url = "http://192.168.0.173/api/usageInfo";

const slice = createSlice({
  name: "usageInfo",

  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },

  reducers: {
    usageInfoRequested: (challenge, action) => {
      challenge.loading = true;
    },

    usageInfoReceived: (challenge, action) => {
      challenge.list = action.payload;
      challenge.loading = false;
      challenge.lastFetch = Date.now();
    },

    usageInfoRequestFailed: (challenge, action) => {
      challenge.loading = false;
    },
  },
});

export const {
  usageInfoRequested,
  usageInfoReceived,
  usageInfoRequestFailed,
} = slice.actions;
export default slice.reducer;

// RESTful API Call
export const loadUsageInfo = () =>
  apiCallBegan({
    url,
    onStart: usageInfoRequested.type,
    onSuccess: usageInfoReceived.type,
    onError: usageInfoRequestFailed.type,
  });
