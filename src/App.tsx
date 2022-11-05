import { useEffect } from "react";
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
      <RobotsList />
    </>
  );
};

export default App;
