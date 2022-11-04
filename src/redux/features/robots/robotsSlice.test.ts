import mockRobotsList from "../../../mocks/mockRobotsList";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given a function robotsReducer", () => {
  describe("When it's invoked with an empty state and an empty type", () => {
    test("Then it should return an empty list of robots", () => {
      const currentEmptyState = {
        list: [],
      };
      const emptyActionCreator = { type: "unknown" };

      const newRobotsState = robotsReducer(
        currentEmptyState,
        emptyActionCreator
      );

      expect(newRobotsState.list).toStrictEqual([]);
    });
  });

  describe("When the loadRobotsActionCreator is invoked with an empty current state and two robots", () => {
    test("Then it should return a new state with two robots", () => {
      const currentEmptyState = {
        list: [],
      };
      const loadTwoRobotsAction = loadRobotsActionCreator(mockRobotsList);

      const newRobotsState = robotsReducer(
        currentEmptyState,
        loadTwoRobotsAction
      );
      const expectedRobotsState = { list: mockRobotsList };

      expect(newRobotsState).toStrictEqual(expectedRobotsState);
    });
  });
});
