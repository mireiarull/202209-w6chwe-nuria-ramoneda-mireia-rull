import Header from "../components/Header/Header";
import RobotFilter from "../components/RobotFilter/RobotFilter";
import RobotsList from "../components/RobotsList/RobotsList";

const HomePage = () => {
  return (
    <>
      <Header />
      <RobotFilter />
      <RobotsList />
    </>
  );
};

export default HomePage;
