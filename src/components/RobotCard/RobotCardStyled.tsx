import styled from "styled-components";

const RobotCardStyled = styled.article`
  img {
    aspect-ratio: 1;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .robot__inner {
    margin-top: ${(props) => props.theme.paddingShort};
    margin-bottom: ${(props) => props.theme.bodyPaddingHorizontal};
  }
  @media screen and (min-width: 750px) {
    .robot__inner {
      display: flex;
      gap: 20px;
      img {
        width: 150px;
      }
    }
  }

  .robot__features {
    li {
      margin-top: 5px;
      font-size: 1rem;
      span {
        font-weight: bold;
      }
    }
  }
`;

export default RobotCardStyled;
