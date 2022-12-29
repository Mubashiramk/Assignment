import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navDiv">
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                style={{ textDecoration: "none", color: "black" }}
              >
                Explore
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
