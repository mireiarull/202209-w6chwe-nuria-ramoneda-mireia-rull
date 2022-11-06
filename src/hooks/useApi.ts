import { useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import {
  loadOneRobotActionCreator,
  loadRobotsActionCreator,
} from "../redux/features/robots/robotsSlice";

const { REACT_APP_API_URL_LOCAL: url_local_api_robots } = process.env;

const useApi = () => {
  const dispatch = useAppDispatch();

  const loadRobotsApi = useCallback(async () => {
    const response = await fetch(`${url_local_api_robots}/robots`);
    const robotResultApi = await response.json();

    dispatch(loadRobotsActionCreator(robotResultApi.robots));
  }, [dispatch]);

  const loadRobotByIdApi = useCallback(
    async (id: string) => {
      const response = await fetch(`${url_local_api_robots}/robots/${id}`);
      const robotResultApi = await response.json();

      dispatch(loadOneRobotActionCreator(robotResultApi.robot));
    },
    [dispatch]
  );

  return {
    loadRobotsApi,
    loadRobotByIdApi,
  };
};

export default useApi;
