import "./App.css";
import { useState } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";

function App() {
   const [cartItem, setCartItem] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Navbar cartItem={cartItem} />
        <Routes>
          <Route
            index
            element={<Home cartItem={cartItem} setCartItem={setCartItem} />}
          />
          <Route
            path="/Cart"
            element={<Cart cartItem={cartItem} setCartItem={setCartItem} />}
          />
          <Route
            path="/SingleProduct/:id"
            element={
              <SingleProduct cartItem={cartItem} setCartItem={setCartItem} />
            }
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
