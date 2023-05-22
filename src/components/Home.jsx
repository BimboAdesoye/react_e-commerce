import "../styles/Home.css";
import Hero from "../pages/Hero";
import Jewelry from "../pages/Jewelry";
import Electronics from "../pages/Electronics";
import Women from "../pages/Women";
import LastPage from "../pages/LastPage";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <Jewelry/>
      <Electronics/>
      <Women></Women>
      <LastPage></LastPage>
    </div>
  );
};

export default Home;
