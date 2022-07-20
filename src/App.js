import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import BottomNavigation from "./components/BottomNavBar";
import Search from "./components/HeaderComponents/Search";
import HomePage from "./pages/HomePage.js";
import Login from "./pages/loginPage";

function App() {
  return (
    <>
      <Search />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <BottomNavigation />
    </>
  );
}

export default App;
