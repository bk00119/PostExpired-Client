import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav
        className = "navbar"
      >
        <Link to = "/home" className = "nav-items">
          <button>Home</button>
        </Link>
        <Link to = "/browse" className = "nav-items">
          <button>Browse</button>
        </Link>
        <Link to="/stores" className = "nav-items">
          <button>Stores</button>
          </Link>
        <Link to="/saved" className = "nav-items">
          <button>Saved</button>
          </Link>
        <Link to="/more" className = "nav-items">
          <button>More</button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}