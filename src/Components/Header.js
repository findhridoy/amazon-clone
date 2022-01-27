import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import amazon from "../Images/white-logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="header__logo">
          <Link to="/">
            <img src={amazon} alt="Logo" />
          </Link>
        </div>
        <div className="header__search">
          <input type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <span className="nav__lineOne">Hello</span>
                <span className="nav__lineTwo">Sign In</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <span className="nav__lineOne">Returns</span>
                <span className="nav__lineTwo">& Orders</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="checkout" className="nav__link--basket">
                <ShoppingBasketIcon />
                <span className="basketCount">0</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
