import "../styles/Home.css";
import Hero from "../pages/Hero";
// import Jewelry from "../pages/Jewelry";
import Electronics from "../pages/Electronics";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      {/* <Jewelry/> */}
      <Electronics/>
    </div>
  );
};

export default Home;
