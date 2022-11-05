import { useEffect } from "react";
import useApi from "./hooks/useApi";

const App = () => {
  const { loadRobots } = useApi();

  useEffect(() => {
    loadRobots();
  });

  return <p>Robots</p>;
};

export default App;
