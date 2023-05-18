import "../styles/Cart.css";
import { useContext } from "react";
import CartContext from "../Hooks/CartContext";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);

  function handleIncrease(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    );
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    }
  }

  function handleDecrease(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    );
    if (productSelected.quantity === 1) {
      setCartItem(cartItem.filter((oneItem) => oneItem.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((loneItem) => {
          loneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : loneItem;
        })
      );
    }
  }

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
              <div className="col-md-5">
                <img className="w-100" src={image} alt={title} />
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
                      increase
                    </button>
                    <button
                      onClick={() => handleDecrease(singleCartItem)}
                      className="btn btn-primary w-75"
                    >
                      decrease
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* {cartItem.map((singleCartItem) => {
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
                <h2 className="text-danger">{title}</h2>
                <h4 className="text-success lh-base">{description}</h4>
                <h4>
                  {quantity} * {price}
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
          );
        })} */}
      </div>
      {cartItem.length >= 1 && (
        <button
          onClick={() => setCartItem([])}
          className="btn btn-danger m-3 w-25"
        >
          {cartItem.length === 1 ? "Clear Item" : "Clear All"}
        </button>
      )}
    </div>
  );
};

export default Cart;
