import { configureStore } from "@reduxjs/toolkit";
import activitiesSlice from "./act-slice";

const store = configureStore({
  reducer: {
    activities: activitiesSlice,
  },
});

export default store;
