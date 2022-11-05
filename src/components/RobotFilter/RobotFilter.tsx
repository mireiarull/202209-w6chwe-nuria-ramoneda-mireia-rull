import { useState } from "react";
import useApi from "../../hooks/useApi";

const RobotFilter = (): JSX.Element => {
  const { loadRobotByIdApi } = useApi();

  const [newId, setNewId] = useState("");

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    loadRobotByIdApi(newId);
  };

  const handleFormChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNewId(target.value);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="ID"
          value={newId}
          onChange={handleFormChange}
        />
        <button type="submit">send</button>
      </form>
    </>
  );
};

export default RobotFilter;
