import React from "react";
import "../Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Public Transit Route Planner</div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/routes">Available Routes</a>
        </li>
        <li>
          <a href="/ticketpurchase">Ticket Purchase</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
