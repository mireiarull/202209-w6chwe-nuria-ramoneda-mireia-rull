import { useAppSelector } from "../../redux/hooks";
import RobotCard from "../RobotCard/RobotCard";

const RobotsList = (): JSX.Element => {
  const robots = useAppSelector(({ robots: Robots }) => Robots.list);

  return (
    <>
      <ul>
        {robots.map((robot) => (
          <li>
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
