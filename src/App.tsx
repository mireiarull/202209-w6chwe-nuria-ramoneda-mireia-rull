import { useEffect } from "react";
import Header from "./components/Header/Header";
import RobotFilter from "./components/RobotFilter/RobotFilter";
import RobotsList from "./components/RobotsList/RobotsList";
import useApi from "./hooks/useApi";

const App = () => {
  const { loadRobotsApi } = useApi();

  useEffect(() => {
    loadRobotsApi();
  });

  return (
    <main>
      <Header />
      <h2>Robots list</h2>
      <RobotFilter />
      <RobotsList />
    </main>
  );
};

export default App;
