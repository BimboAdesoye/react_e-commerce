import UseFetch from "../Hooks/UseFetch";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const { data: data2, loading: loading2 } = UseFetch(
    "https://fakestoreapi.com/products/14"
  );
  const { data: data3, loading: loading3 } = UseFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );

  return (
    <div className="container hero-container">
      <h2> {loading3 && <ClipLoader color={"red"} size={150} />}</h2>
      <div className="row justify-content-between align-items-center ">
        <div className="col-sm-12 col-lg-6 ">
          <img className="w-100 hero-img" src={data2.image} alt="" />
        </div>
        {/* Card section */}
        <div className="col-sm-12 col-lg-5 datum-container">
          <div className="card-container">
            {data3.map((datum3) => {
              const { id, title, image, price } = datum3;
              return (
                <div
                  className="h-100 p-1 text-center card-inner shadow rounded"
                  key={id}
                >
                  <Link
                    className="text-decoration-none"
                    to={`/SingleProduct/${id}`}
                  >
                    <img className="w-75 p-4" src={image} alt={title} />
                    <p className="fw-bold">${price} </p>
                  </Link>
                  <button className="btn btn-primary">add to cart</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
