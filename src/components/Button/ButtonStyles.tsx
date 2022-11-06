import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.backgroundColor};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin: 10px;
  font-size: 1.25rem;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.backgroundColor};
    font-weight: bold;
  }
`;

export default ButtonStyled;
