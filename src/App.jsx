import "./App.css";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import ExtraProduct from "./pages/ExtraProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/ExtraProduct/:id" element={<ExtraProduct />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
