import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./layouts/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
