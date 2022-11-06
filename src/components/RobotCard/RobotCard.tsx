import { Robot } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({ robot: robotObject }: RobotCardProps): JSX.Element => {
  const {
    _id,
    name,
    image,
    features: { speed, endurance, creationDate },
  } = robotObject;

  return (
    <RobotCardStyled className="robot">
      <h2 className="robot__name">{name}</h2>
      <div className="robot__inner">
        <img src={image} alt={name} />

        <ul className="robot__features">
          <li className="robot__speed">
            <span>Speed:</span> {speed}
          </li>
          <li className="robot__endurance">
            <span>Endurance:</span> {endurance}
          </li>
          <li className="robot__date-creation">
            <span>Creation date:</span> {creationDate}
          </li>
          <li className="robot__id">
            <span>Id:</span> {_id}
          </li>
        </ul>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
