import React from "react";

import "../assets/styles/MenuItem.css";
export const MenuItem = ({ page, title, icon, setPage }) => {
  return (
    <li className="menu-item" onClick={() => setPage(page)}>
      <div>{title}</div>
      <img src={icon} alt="icon-menu" />
    </li>
  );
};
