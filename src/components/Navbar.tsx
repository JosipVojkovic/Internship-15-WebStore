import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="main-navigation">
      <h2>WebShop</h2>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddProduct"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
