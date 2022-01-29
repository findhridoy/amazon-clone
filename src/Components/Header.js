import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
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

        <NavLink to="/locations" className="header__location">
          <LocationOnIcon className="location__icon" />
          <div className="location__name">
            <span className="location__lineOne">Deliver to</span>
            <span className="location__lineTwo"> Bangladesh</span>
          </div>
        </NavLink>

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

      <div className="mobile__nav--menu">
        <ul className="mobile__nav--list">
          <li className="mobile__nav--item">
            <IconButton color="primary">
              <HomeIcon className="mobile__nav--icon" />
            </IconButton>
          </li>
          <li className="mobile__nav--item">
            <IconButton color="primary">
              <LocationOnIcon className="mobile__nav--icon" />
            </IconButton>
          </li>
          <li className="mobile__nav--item">
            <IconButton color="primary">
              <SearchIcon className="mobile__nav--icon" />
            </IconButton>
          </li>
          <li className="mobile__nav--item">
            <IconButton color="primary">
              <AddCircleIcon className="mobile__nav--icon" />
            </IconButton>
          </li>
          <li className="mobile__nav--item">
            <IconButton color="primary">
              <PersonIcon className="mobile__nav--icon" />
            </IconButton>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
