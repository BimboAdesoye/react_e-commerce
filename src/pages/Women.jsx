import { useContext } from "react";
import UseFetch from "../Hooks/UseFetch";
import "../styles/Women.css";
import CartContext from "../Hooks/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Women = () => {
  const { handleAddToCart } = useContext(CartContext);

  const { data } = UseFetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );

  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="women">
      <div className="women-header">
        <h2 className="">WOMEN'S SECTION</h2>
      </div>
      <div className="women-inner">
        {data.map((datumWomen) => {
          const { id, title, price, description, image, rating } = datumWomen;
          return (
            <div key={id} className="women-container">
              <Link to={`/SingleProduct/${id}`} className="text-decoration-none text-black">
                <div className="women-image">
                  <img className="" src={image} alt="" />
                </div>
                <hr />
                <div className="women-content">
                    <p className="women-title fw-bold fs-5">{title}</p>
                    <p className="women-price fw-bold fs-3">${price}</p>
                    <p className="women-desc fst-italic fw-bold">
                      {description.slice(0, 100)}
                    </p>
                    <p className="women-rating fw-bold fs-4">
                      RATING: {rating.rate}
                    </p>
                    <button
                      className="btn btn-primary btn-lg women-btn"
                      onClick={() => {
                        handleAddToCart(datumWomen);
                        notify();
                      }}
                    >
                      ADD TO CART
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

export default Women;
