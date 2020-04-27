import React, { Fragment } from "react";
import { menus } from "../const";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      {menus &&
        menus.map(item => {
          return (
            <NavLink exact to={item.path} className="menu-item" key={item.id}>
              {item.name}
            </NavLink>
          );
        })}
    </div>
  );
};

export default Menu;
