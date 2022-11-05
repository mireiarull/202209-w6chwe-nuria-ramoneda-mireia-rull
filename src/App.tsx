import { useEffect } from "react";
import RobotFilter from "./components/RobotFilter/RobotFilter";
import RobotsList from "./components/RobotsList/RobotsList";
import useApi from "./hooks/useApi";

const App = () => {
  const { loadRobotsApi } = useApi();

  useEffect(() => {
    loadRobotsApi();
  });

  return (
    <>
      <h1>Robots</h1>
      <RobotFilter />
      <RobotsList />
    </>
  );
};

export default App;
