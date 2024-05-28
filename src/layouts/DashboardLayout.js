import React from "react";
import VerticalMenu from "../components/VerticalMenu";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <VerticalMenu />
      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
