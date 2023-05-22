import UseFetch from "../Hooks/UseFetch";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Hooks/CartContext";
import "../styles/Jewelry.css";

const Jewelry = () => {
  const { handleAddToCart } = useContext(CartContext);

  const { data } = UseFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container jewelry">
      <div className="component-title-jewelry">
        <h2>JEWELRY CATEGORY</h2>
      </div>
      <div className="jewelry-container">
        {data.map((datumJewelry) => {
          const { id, image, price, title } = datumJewelry;
          return (
            <div className="jewelry-inner" key={id}>
              <Link
                className="text-decoration-none link"
                to={`/SingleProduct/${id}`}
              >
                <div className="jewelry-img">
                  <img className="img-fluid" src={image} alt={title} />
                </div>
                <div className="jewelry-content">
                  <p className="fw-bold">${price} </p>
                  <p>{title}</p>
                  <button
                    onClick={() => {
                      handleAddToCart(datumJewelry);
                      notify();
                    }}
                    className="btn btn-primary text-white jewelry-btn"
                  >
                    Add To Cart
                  </button>
                </div>
              </Link>
              <ToastContainer />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jewelry;
