import useApi from "../../hooks/useApi";
import { Robot } from "../../types";
import Button from "../Button/Button";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({
  robot: {
    _id,
    name,
    image,
    features: { speed, endurance, creationDate },
  },
}: RobotCardProps): JSX.Element => {
  const { deleteOneRobotApi } = useApi();

  return (
    <RobotCardStyled className="robot">
      <div className="robot__head">
        <h3 className="robot__name">{name}</h3>
        <div className="robot__buttons-wrapper">
          <Button
            text="Delete"
            content="icon"
            classCss="button__icon button__icon--delete"
            action={() => deleteOneRobotApi(_id)}
          />
          <Button
            text="Edit"
            content="icon"
            classCss="button__icon button__icon--edit"
            action={() => {}}
          />
        </div>
      </div>
      <div className="robot__inner">
        <img src={image} alt={name} width="150" height="150" />

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
