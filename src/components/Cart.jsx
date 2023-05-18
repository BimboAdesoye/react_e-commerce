import "../styles/Cart.css";
import { useContext } from "react";
import CartContext from "../Hooks/CartContext";

const Cart = () => {
  const { cartItem, setCartItem, handleIncrease, handleDecrease, totalPrice } =
    useContext(CartContext);

  return (
    <div className="container">
      <div>
        {cartItem.length === 0 && (
          <div>
            <h3>No item in the cart</h3>
          </div>
        )}
      </div>
      <div>
        {cartItem.map((singleCartItem) => {
          const { image, id, title, price, quantity, description } =
            singleCartItem;
          return (
            <div
              key={id}
              className="row justify-content-between align-items-center mt-4"
            >
              <div className="col-md-5 text-center">
                <img className="cart-img" src={image} alt={title} />
              </div>
              <div className="col-md-6">
                <h2 className="text-danger"> {title}</h2>
                <h4 className="text-success lh-base"> {description} </h4>
                <div>
                  <h4>
                    {quantity} * {price}{" "}
                  </h4>
                  <div className="d-flex justify-content-between w-75 gap-4">
                    <button
                      onClick={() => handleIncrease(singleCartItem)}
                      className="btn btn-primary w-75"
                    >
                      Increase
                    </button>
                    <button
                      onClick={() => handleDecrease(singleCartItem)}
                      className="btn btn-primary w-75"
                    >
                      Decrease
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {cartItem.length >= 1 && (
        <button 
          onClick={() => setCartItem([])}
          className="btn btn-danger clear-btn"
        >
          {cartItem.length === 1 ? "Clear Item" : "Clear All"}
        </button>
      )}
      <hr />
      <div className="text-center">
        <h2>Total Price</h2>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
