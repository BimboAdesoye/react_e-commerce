import Marque from "./Marque";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <Marque></Marque>
      <div className="navbar-content">
        <header className="container d-flex justify-content-between align-items-center p-1">
          <ul>
            <li className="list-unstyled">
              <Link className="text-decoration-none" to="/">
                <h1 className="fst-italic text-light m-0">ABIMBOLA</h1>
              </Link>
            </li>
          </ul>
          <nav>
            <Link className="text-decoration-none text-light fs-3 d-flex align-items-center gap-2" to="/Cart">
              <BsCart4 />
              Cart
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
