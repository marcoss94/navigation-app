import React from "react";
import "../assets/styles/Menu.css";
import data from "../menu.json";
import { MenuItem } from "./MenuItem";

export const Menu = ({ setPage }) => {
  return (
    <aside className="menu">
      <ul>
        {data.map(({ icon, id, page, title }) => (
          <MenuItem
            icon={icon}
            page={page}
            title={title}
            key={id}
            setPage={setPage}
          />
        ))}
      </ul>
    </aside>
  );
};
