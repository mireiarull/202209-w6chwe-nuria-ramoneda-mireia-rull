import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robot } from "../../../types.js";

import RobotsState from "./types.js";

const robotsInitialState: RobotsState = {
  list: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsInitialState,
  reducers: {
    loadRobots: (
      currentRobotsState,
      action: PayloadAction<Robot[]>
    ): RobotsState => ({
      ...currentRobotsState,
      list: [...action.payload],
    }),
    loadOneRobot: (
      currentRobotsState,
      action: PayloadAction<Robot>
    ): RobotsState => ({
      ...currentRobotsState,
      list: [action.payload],
    }),
    createOneRobot: (
      currentRobotsState,
      action: PayloadAction<Robot>
    ): RobotsState => ({
      ...currentRobotsState,
      list: currentRobotsState.list.concat(action.payload),
    }),
    deleteOneRobot: (
      currenRobotsState,
      action: PayloadAction<Robot>
    ): RobotsState => ({
      ...currenRobotsState,
      list: currenRobotsState.list.filter(
        (robot) => robot._id !== action.payload._id
      ),
    }),
  },
});

export const robotsReducer = robotsSlice.reducer;

export const {
  loadRobots: loadRobotsActionCreator,
  loadOneRobot: loadOneRobotActionCreator,
  createOneRobot: createOneRobotActionCreator,
  deleteOneRobot: deleteOneRobotActionCreator,
} = robotsSlice.actions;
