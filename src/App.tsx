import { useEffect } from "react";
import useApi from "./hooks/useApi";

const App = () => {
  const { loadRobotsApi } = useApi();

  useEffect(() => {
    loadRobotsApi();
  });

  return <p>Robots</p>;
};

export default App;
