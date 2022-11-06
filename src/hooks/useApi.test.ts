import { renderHook } from "@testing-library/react";
import { store } from "../redux/store";
import ProviderWrapper from "../test-utils/ProviderWrapper";
import useApi from "./useApi";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useApi custom hook", () => {
  describe("When its method loadRobots is invoked", () => {
    test("Then it should invoke dispatch with loadRobots action creator and a list of 2 robots", async () => {
      const {
        result: {
          current: { loadRobotsApi },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });

      await loadRobotsApi();

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When its method loadRobotByIdApi is invoked", () => {
    test("Then it should invoke dispatch with loadOneRobot action creator and a list of 1 robot", async () => {
      const robotId = "2";

      const {
        result: {
          current: { loadRobotByIdApi },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });

      await loadRobotByIdApi(robotId);

      expect(dispatchSpy).toHaveBeenCalled();
    });
  });
});
