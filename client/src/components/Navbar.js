import React from "react";
import { NavLink } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import Clock from "./Clock.js";

export default function Navbar() {
  const navStyles = ({ isActive }) => {
    return {
      Color: isActive ? "#fd5c63" : "#00000050",
    };
  };

  return (
    <>
      <Clock />
      <div id="nav-bar">
        <NavLink to="/">
          <div className="brand-div">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6543/6543839.png"
              alt="workshoply logo"
            />&nbsp;<h1 className="brand"> Workshoply </h1>
          </div>
        </NavLink>

        <ul className="navbar-nav">
          <li>
            <NavLink to="/" style={navStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/workshops" style={navStyles}>
              Workshops
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" style={navStyles}>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" style={navStyles}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={navStyles}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={navStyles}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/create" style={navStyles}>
              <RiAdminLine style=
                {{ padding: "0", margin: "0", width: "1.5rem", height: "1.5rem" }} />
            </NavLink>
          </li>
        </ul>
      </div>

    </>
  );
}
