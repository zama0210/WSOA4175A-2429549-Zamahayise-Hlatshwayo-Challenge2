import { Link } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Available Routes</Link>
        </li>
        <li>
          <Link to="/purchase">Ticket Purchase</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
