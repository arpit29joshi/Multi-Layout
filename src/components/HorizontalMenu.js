import React from "react";
import { Link } from "react-router-dom";
import { menuConfig } from "../menuConfig";

const HorizontalMenu = () => {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#333" }}>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          display: "flex",
        }}
      >
        {menuConfig.horizontal.map((item) => (
          <li key={item.path} style={{ padding: "14px 20px" }}>
            <Link
              to={item.path}
              style={{ color: "white", textDecoration: "none" }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalMenu;
