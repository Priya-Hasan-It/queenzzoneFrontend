import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import DashboardLayout from "./pages/Dashboard/Layout";
import HomePage from "./pages/HomePage.js";
import Login from "./pages/loginPage";

function App() {
  return (
    <>
      {/* <Search /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />} />

        <Route path="/dashboard/:optionName" element={<DashboardLayout />} />
      </Routes>

      {/* <BottomNavigation /> */}
    </>
  );
}

export default App;
