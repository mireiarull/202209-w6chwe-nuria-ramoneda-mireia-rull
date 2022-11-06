import HeaderStyled from "./HeaderStyled";
import logo from "./robot-face.svg";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img src={logo} alt={"Robot icon"} />
      <h1>Robots</h1>
    </HeaderStyled>
  );
};

export default Header;
