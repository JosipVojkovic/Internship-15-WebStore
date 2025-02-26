import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="main-navigation">
      <h2>WebStore</h2>
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
            className={({ isActive }) =>
              isActive ? "active last-NavLink" : "last-NavLink"
            }
          >
            Add product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
