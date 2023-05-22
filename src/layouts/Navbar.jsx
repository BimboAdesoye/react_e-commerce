import Marque from "./Marque";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../Hooks/CartContext";

const Navbar = () => {
  const { cartItem } = useContext(CartContext);
  return (
    <div className="sticky-top">
      <Marque></Marque>
      <div className="navbar-content">
        <header className="container d-flex justify-content-between align-items-center p-1">
          <ul>
            <li className="list-unstyled">
              <Link className="text-decoration-underline text-white" to="/">
                <h1 className="fst-italic text-light m-0">ABIMBOLA</h1>
              </Link>
            </li>
          </ul>
          <nav className="w-50 d-flex flex-row-reverse justify-content-between">
            <ul className="d-sm-none d-md-flex justify-content-between w-75">
              <li className="list-unstyled d-none-x-sm">
                <Link className="text-decoration-none text-light fs-4" to="/">
                  Account
                </Link>
              </li>
              <li className="list-unstyled d-none-x-sm">
                <Link className="text-decoration-none text-light fs-4" to="/">
                  Help
                </Link>
              </li>
              <li className="list-unstyled">
                <Link
                  className="nav-cart text-decoration-none text-light fs-4 d-flex align-items-center gap-1"
                  to="/Cart"
                >
                  <BsCart4 />
                  Cart ({cartItem.length})
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
