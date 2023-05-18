import { createContext, useState, useEffect } from "react";
const CartContext = createContext();

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItem")) || [];

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(cartItemsFromLocalStorage);


  function handleAddToCart(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    );
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) => {
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem;
        })
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  }
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
