import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
