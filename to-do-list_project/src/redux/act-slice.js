import { createSlice } from "@reduxjs/toolkit";

const actSlice = createSlice({
  name: "activities",
  initialState: { activities: [] },
  reducers: {
    addAct: (state, action) => {
      state.activities.push(action.payload);
    },
    finishAct: (state, action) => {
      const finished = [];
      const unfinished = [];
      state.activities.forEach((v) => {
        if (v.act === action.payload) v.status = true;
        if (v.status === true) {
          finished.push(v);
        } else {
          unfinished.push(v);
        }
      });
      state.activities = [...finished, ...unfinished];
    },
    delAct: (state, action) => {
      state.activities = state.activities.filter((v) => {
        return v.act !== action.payload;
      });
    },
  },
});

export const { addAct, finishAct, delAct } = actSlice.actions;
export default actSlice.reducer;
