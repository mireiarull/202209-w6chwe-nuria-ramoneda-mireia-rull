import { useEffect } from "react";
import Header from "./components/Header/Header";
import RobotFilter from "./components/RobotFilter/RobotFilter";
import RobotForm from "./components/RobotForm/RobotForm";
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
      <RobotForm />
    </main>
  );
};

export default App;
