import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const url = "http://192.168.0.173/api/generalInfo";

const slice = createSlice({
  name: "generalInfo",

  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },

  reducers: {
    generalInfoRequested: (challenge, action) => {
      challenge.loading = true;
    },

    generalInfoReceived: (challenge, action) => {
      challenge.list = action.payload;
      challenge.loading = false;
      challenge.lastFetch = Date.now();
    },

    generalInfoRequestFailed: (challenge, action) => {
      challenge.loading = false;
    },
  },
});

export const {
  generalInfoRequested,
  generalInfoReceived,
  generalInfoRequestFailed,
} = slice.actions;
export default slice.reducer;

// RESTful API Call
export const loadGeneralInfo = () =>
  apiCallBegan({
    url,
    onStart: generalInfoRequested.type,
    onSuccess: generalInfoReceived.type,
    onError: generalInfoRequestFailed.type,
  });
