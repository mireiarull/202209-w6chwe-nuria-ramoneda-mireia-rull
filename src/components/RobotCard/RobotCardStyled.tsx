import styled from "styled-components";
import deleteIcon from "../../styles/icons/delete_icon.svg";
import editIcon from "../../styles/icons/edit_icon.svg";

const RobotCardStyled = styled.article`
  img {
    aspect-ratio: 1;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .robot__icon {
    width: 50px;
    g {
      fill: white;
    }
  }

  .robot__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .robot__name {
    font-size: 1.6rem;
  }
  .robot__inner {
    padding-top: ${(props) => props.theme.paddingShort};
    margin-bottom: ${(props) => props.theme.bodyPaddingHorizontal};
    margin-top: 15px;
    border-top: 1px dotted #7a7a7a;
    border-right: 1px dotted #7a7a7a;
  }
  .robot__buttons-wrapper {
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

  .button.button__icon {
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    border: none;
    display: inline-block;
    height: 50px;
    width: 50px;
    margin: 0 0 0 15px;
    padding: 0;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
    &--delete {
      background: url(${deleteIcon});
    }
    &--edit {
      background-image: url(${editIcon});
    }
    &:hover,
    &:focus {
      filter: invert(18%) sepia(48%) saturate(5575%) hue-rotate(346deg)
        brightness(90%) contrast(87%);
    }
  }
`;

export default RobotCardStyled;
