import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, } from "./HeaderElements";
import logo from '../../Assets/img.ico';

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={logo}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
       
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
