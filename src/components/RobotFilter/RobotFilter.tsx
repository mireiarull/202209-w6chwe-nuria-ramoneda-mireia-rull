import { useState } from "react";
import useApi from "../../hooks/useApi";
import { RobotFilterStyled } from "./RobotFilterStyled";

const RobotFilter = (): JSX.Element => {
  const { loadRobotByIdApi } = useApi();

  const [newId, setNewId] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    loadRobotByIdApi(newId);

    setNewId("");
  };

  const handleFormChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNewId(target.value);
  };

  return (
    <>
      <RobotFilterStyled onSubmit={handleSubmit}>
        <label htmlFor="name">Find robot by its ID</label>
        <input
          type="text"
          id="name"
          name="ID"
          placeholder="Write the robot's ID here"
          value={newId}
          onChange={handleFormChange}
          autoComplete="off"
        />
        <button type="submit">send</button>
      </RobotFilterStyled>
    </>
  );
};

export default RobotFilter;
