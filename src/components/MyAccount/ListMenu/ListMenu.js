import React from "react";

import "./listmenu.scss";

const ListMenu = () => {
  return (
    <div className="Listmenu">
      <div className="container">
        <nav className="nav">
          <ul className="list-items-menu">
            <li className="menu-item">
              Home <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className="menu-item">
              TV & Audio <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className="menu-item">
              Smart Phones <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className="menu-item">
              Laptops & Desktops <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className="menu-item">
              Gadgets <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className="menu-item">
              GPS & Cars <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className="menu-item">
              Cameras & Accensories <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className="menu-item">
              Movies & Games <i className="fa-solid fa-angle-down"></i>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListMenu;
