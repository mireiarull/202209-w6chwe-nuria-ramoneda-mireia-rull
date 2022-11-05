import { Robot } from "../../types";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({ robot: robotObject }: RobotCardProps): JSX.Element => {
  const {
    name,
    image,
    features: { speed, endurance, creationDate },
  } = robotObject;

  return (
    <article className="robot">
      <h2 className="robot__name">{name}</h2>
      <picture>
        <img src={image} alt={name} />
      </picture>
      <ul className="robot__features">
        <li className="robot__speed">Speed: {speed}</li>
        <li className="robot__endurance">Endurance: {endurance}</li>
        <li className="robot__date-creation">{creationDate}</li>
      </ul>
    </article>
  );
};

export default RobotCard;
