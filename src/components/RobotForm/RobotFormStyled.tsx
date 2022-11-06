import styled from "styled-components";

const RobotFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  .form__label {
    font-weight: 400;
  }
  .form__item {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  span {
    margin-top: 10px;
  }

  .button {
    margin: 1rem 2rem;
    width: 180px;
  }

  input {
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0;

    &:focus {
      outline: none;
    }
  }
`;

export default RobotFormStyled;
