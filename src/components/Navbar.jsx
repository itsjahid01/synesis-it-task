import { PiBellRingingBold } from "react-icons/pi";
import logo from "../assets/logo.png";
const Navbar = ({ counter }) => {
  return (
    <div className="nav-container">
      <div className="logo-section">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="button-section">
        <p className="counter">
          Bell Counter{" "}
          <span>
            <PiBellRingingBold />
            <strong>
              <sup>{counter}</sup>
            </strong>
          </span>
        </p>
        <button className="signin-button">Sign In</button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
