import { useContext } from "react";
import UseFetch from "../Hooks/UseFetch";
import "../styles/Electronics.css";
import CartContext from "../Hooks/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Electronics = () => {
  const { data } = UseFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  const { handleAddToCart } = useContext(CartContext);

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="container electronics">
      <h2 className="text-center fw-bold text-uppercase">
        Electronics Category
      </h2>
      <div className="electronics-inner">
        {data.map((datumElectronics) => {
          const { id, title, price, description, image, rating } =
            datumElectronics;
          return (
            <div className="electronics-card" key={id}>
              <Link to={`/SingleProduct/${id}`}>
                <div className="electronics-image">
                  <img src={image} alt="" />
                </div>
              </Link>
              <div className="electronics-content">
                <div>
                  <h2 className="title">{title.slice(0, 35)}</h2>
                  <p className="desc">{description.slice(0, 200)}</p>
                  <p className="fw-bold fs-3">${price}</p>
                  <p className="fw-bold">RATING: {rating.rate}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleAddToCart(datumElectronics);
                      notify();
                    }}
                    className="btn btn-primary btn-lg text-uppercase fs-5 electronics-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <ToastContainer />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Electronics;
