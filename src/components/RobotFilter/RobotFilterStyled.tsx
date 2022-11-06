import styled from "styled-components";

export const RobotFilterStyled = styled.form`
  display: flex;
  flex-direction: column;
  color: #000;
  justify-content: center;
  font-size: 1.5rem;
  align-items: center;
  width: 50%;
  padding: 15px;
  display: flex;
  margin: 0 auto;

  input {
    border: none;
    border-bottom: 1px solid black;
    padding: 0 10px;
    width: 100%;
    background-color: transparent;
    text-align: center;
    font-size: 1rem;
    padding: 5px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
      font-size: 1rem;
    }
  }
`;
