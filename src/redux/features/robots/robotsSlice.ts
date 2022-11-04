import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Robots from "../../../types";
import robotsState from "./types";

const robotsInitialState: robotsState = {
  list: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsInitialState,
  reducers: {
    loadRobots: (
      currentRobotsState,
      action: PayloadAction<Robots[]>
    ): robotsState => ({
      ...currentRobotsState,
      list: [...action.payload],
    }),
  },
});

export const robotsReducer = robotsSlice.reducer;

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
