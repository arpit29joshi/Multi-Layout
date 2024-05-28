import React from "react";
import HorizontalMenu from "../components/HorizontalMenu";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <HorizontalMenu />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
