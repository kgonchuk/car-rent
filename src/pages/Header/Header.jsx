import React from "react";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={css.header}>
      <div>
        <NavLink className={css.logo_header} to="/Home">
          <div className={css.wrap}>
            <p className={css.gradient_text}>Car-Rental</p>
          </div>
        </NavLink>
      </div>
      <div>
        <div className={css.div_nav}>
          <nav className={css.nav_header}>
            <ul className={css.header_list}>
              <li className={css.header_item}>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li className={css.header_item}>
                <NavLink to="/Catalog">Catalog</NavLink>
              </li>
              <li className={css.header_item}>
                <NavLink to="/Favourites">Favourites</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
