import HeaderStyled from "./HeaderStyled";
import logo from "./robot-face.svg";
import { NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="container">
      <img src={logo} alt={"Robot icon"} />
      <h1>Robots</h1>
      <nav className="header__nav">
        <ul className="header__nav-item-list">
          <li className="header__nav-item">
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/create">CREATE A ROBOT</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
