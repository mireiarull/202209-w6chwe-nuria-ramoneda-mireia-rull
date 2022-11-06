import styled from "styled-components";
import "@fontsource/orbitron";

const HeaderStyled = styled.div`
  color: ${(props) => props.theme.colorPrimary};
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  font-family: "Orbitron";
  font-weight: 600;
  border-bottom: 2.5px solid #4c3775;
  img {
    height: 50px;
  }

  h1 {
    padding-top: 7px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colorPrimary};
    margin: 10px;
  }
`;

export default HeaderStyled;
