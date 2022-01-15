import React, { useState } from "react";
import Logo from "../src/assets/shared/logo.svg";
import HamOpen from "../src/assets/shared/icon-hamburger.svg";
import HamClose from "../src/assets/shared/icon-close.svg";
import { NavLink, exact } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const ToggleNav = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  // console.log(toggle);

  return (
    <>
      <header className="Header-container">
        <div className="header flex flex-sp-bt-al-center">
          <img src={Logo} alt="logo" className="logo" />
          <img
            src={toggle ? HamClose : HamOpen}
            alt="Hamburger"
            className="hamburger"
            onClick={ToggleNav}
          />
          <nav className={toggle ? "nav-links header-active" : "nav-links"}>
            <ul className="flex">
              <li>
                <NavLink className="nav-item" to="/">
                  00<span> HOME</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/Destination">
                  01<span> DESTINATION</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/Crew">
                  02<span> CREW</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item" to="/Technology">
                  03<span> TECHNOLOGY</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
