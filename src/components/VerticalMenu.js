import React from "react";
import { Link } from "react-router-dom";
import { menuConfig } from "../menuConfig";

const VerticalMenu = () => {
  return (
    <div style={styles.container}>
      <ul style={styles.menu}>
        {menuConfig.vertical.map((item) => (
          <li key={item.path} style={styles.menuItem}>
            <Link to={item.path} style={styles.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: "200px",
    float: "left",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    padding: "10px",
  },
  menu: {
    listStyleType: "none",
    padding: 0,
  },
  menuItem: {
    marginBottom: "10px",
    borderRadius: "3px",
    backgroundColor: "#e0e0e0",
    transition: "background-color 0.3s ease",
    padding: "8px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default VerticalMenu;
