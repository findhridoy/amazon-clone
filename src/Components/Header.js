import { IconButton } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContext";
import amazon from "../Images/white-logo.png";

const Header = ({ history }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [openSearchBox, setOpenSearchBox] = useState(false);

  // use context
  const {
    state: { userInfo, basketItems },
    signout,
    setSearchKey,
  } = useGlobalContext();

  // handle search
  const handleSearch = () => {
    setSearchKey(searchKeyword);
    setOpenSearchBox(!openSearchBox);
  };

  // handle route change on mobile
  const handleRouteChange = (path) => {
    history?.push(path);
  };
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div className="header__logo">
            <Link to="/">
              <img src={amazon} alt="Logo" />
            </Link>
          </div>

          <NavLink exact to="/locations" className="header__location">
            <LocationOnIcon className="location__icon" />
            <div className="location__name">
              <span className="location__lineOne">Deliver to</span>
              <span className="location__lineTwo"> Bangladesh</span>
            </div>
          </NavLink>

          <div
            className={
              openSearchBox
                ? "header__search open__header--search"
                : "header__search"
            }
          >
            <input
              type="text"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <Link to="/search" onClick={handleSearch}>
              <SearchIcon className="header__searchIcon" />
            </Link>
          </div>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                {userInfo ? (
                  <button className="nav__link" onClick={() => signout()}>
                    <span className="nav__lineOne">
                      Hello {userInfo?.displayName}
                    </span>
                    <span className="nav__lineTwo">Sign Out</span>
                  </button>
                ) : (
                  <NavLink className="nav__link" exact to="/signin">
                    <span className="nav__lineOne">Hello</span>
                    <span className="nav__lineTwo">Sign In</span>
                  </NavLink>
                )}
              </li>
              <li className="nav__item">
                <NavLink className="nav__link" exact to="/order">
                  <span className="nav__lineOne">Returns</span>
                  <span className="nav__lineTwo">& Orders</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink exact to="/basket" className="nav__link--basket">
                  <ShoppingBasketIcon />
                  <span className="basketCount">{basketItems?.length}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mobile__nav--menu">
          <ul className="mobile__nav--list">
            <li className="mobile__nav--item">
              <NavLink to="/" exact activeClassName="mobile__nav--link--active">
                <IconButton color="primary" onClick={handleRouteChange("/")}>
                  <HomeIcon className="mobile__nav--icon" />
                </IconButton>
              </NavLink>
            </li>
            <li className="mobile__nav--item">
              <NavLink
                to="/locations"
                exact
                activeClassName="mobile__nav--link--active"
              >
                <IconButton color="primary">
                  <LocationOnIcon className="mobile__nav--icon" />
                </IconButton>
              </NavLink>
            </li>
            <li className="mobile__nav--item">
              <IconButton
                color="primary"
                onClick={() => setOpenSearchBox(!openSearchBox)}
              >
                <SearchIcon className="mobile__nav--icon" />
              </IconButton>
            </li>
            <li className="mobile__nav--item">
              <NavLink
                to="/order"
                exact
                activeClassName="mobile__nav--link--active"
              >
                <IconButton color="primary">
                  <AddCircleIcon className="mobile__nav--icon" />
                </IconButton>
              </NavLink>
            </li>
            <li className="mobile__nav--item">
              <NavLink
                to="/signin"
                exact
                activeClassName="mobile__nav--link--active"
              >
                <IconButton color="primary">
                  <PersonIcon className="mobile__nav--icon" />
                </IconButton>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
