import { SearchOutlined, ShoppingBasket } from "@material-ui/icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.scss";
import "./Header.scss";
import { Button } from "@material-ui/core";
const Header = () => {
  const HandleClassName = (isActive) => {
    if (isActive) {
      return `className="Active_Header"`;
    } else {
      return `className="Active_Header"`;
    }
  };

  return (
    <>
      <div className="Header">
        <nav className="Header_nav">
          <ul className="Header_nav__ul">
            <li className="Header_nav__ul__li">
              <NavLink
                to="/Women"
                className={({ isActive }) =>
                  isActive ? "Header_nav__ul__li__activeClass" : "a"
                }
              >
                Women
              </NavLink>
              <NavLink to="/Man">Man</NavLink>
              <NavLink to="/Demin">Demin</NavLink>
              <NavLink to="/shop">The Giift Shop</NavLink>
              <NavLink to="/About">About</NavLink>
            </li>
          </ul>
          <div className="Header_nav__logo">
            <h1>levents</h1>
          </div>
          <div className="Header_nav__right">
            <div className="Header_nav__right__Search">
              <input
                type="text"
                placeholder="Search"
                className="Header_nav__right__Search__input"
              />

              <button className="Header_nav__right__Search__button">
                <SearchOutlined className="Header_nav__right__Search__button__icon" />
              </button>
            </div>
            <div className="Header_nav__right__buttons">
              <div className="Header_nav__right__buttons__login">
                <button className="Header_nav__right__buttons__login__btn">
                  <AccountCircleIcon className="Header_nav__right__buttons__login__btn__icon" />
                </button>
              </div>
              <div className="Header_nav__right__buttons__market">
                <button className="Header_nav__right__buttons__market__btn">
                  <ShoppingBasket className="Header_nav__right__buttons__market__btn__icon" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
