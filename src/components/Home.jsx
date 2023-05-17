import "../styles/Home.css";
import Hero from "../pages/Hero";


const Home = ({cartItem, setCartItem}) => {
  return (
    <div className="container">
      <Hero cartItem={cartItem} setCartItem={setCartItem}/>
    </div>
  );
};

export default Home;
