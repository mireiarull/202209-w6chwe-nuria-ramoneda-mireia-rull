import { useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import { ApiRobot } from "../types";
import { loadRobotsActionCreator } from "../redux/features/robots/robotsSlice";

const { REACT_APP_API_URL_LOCAL: url_local_api_robots } = process.env;

const useApi = () => {
  const dispatch = useAppDispatch();

  const loadRobotsApi = useCallback(async () => {
    const response = await fetch(`${url_local_api_robots}/robots`);
    const robotsApi: ApiRobot = await response.json();

    dispatch(loadRobotsActionCreator(robotsApi.robots));
  }, [dispatch]);

  return {
    loadRobotsApi,
  };
};

export default useApi;
