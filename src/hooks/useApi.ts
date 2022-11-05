import { useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import Robot from "../types";
import { loadRobotsActionCreator } from "../redux/features/robots/robotsSlice";

const { REACT_APP_API_ROBOTS: url_robots_Api } = process.env;

const useApi = () => {
  const dispatch = useAppDispatch();

  const loadRobots = useCallback(async () => {
    const response = await fetch(`${url_robots_Api}`);
    const robotsApi: Robot[] = await response.json();

    dispatch(loadRobotsActionCreator(robotsApi));
  }, [dispatch]);

  return {
    loadRobots,
  };
};

export default useApi;
