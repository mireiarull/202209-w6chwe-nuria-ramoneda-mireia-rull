import styled from "styled-components";

const RobotsListStyled = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;

export default RobotsListStyled;
