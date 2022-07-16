import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="d-flex align-items-center justify-content-center">
          <div className="w-100">
            <ul className="w-100">
              <li>
                <Link to="/">ALL</Link>
              </li>
              <li>
                <Link to="/">MEN</Link>
              </li>
              <li>
                <Link to="/">WOMAN</Link>
              </li>
              <li>
                <Link to="/">KIDS</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
