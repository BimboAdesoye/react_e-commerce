import { useParams } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const { title, image, description, price } = data;

  return (
    <div>
      <div className="container">
        {loading && <ClipLoader />}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-sm-12 col-md-4 text-center ">
            <img className="single-img" src={image} alt="" />
          </div>
          <div className="col-sm-12 col-md">
            <h1 className="text-danger fw-bold">{title}</h1>
            <h4 className="text-success lh-base">{description}</h4>
            <h3>${price}</h3>
            <p>{}</p>
            <div className="d-flex flex-column mt-4">
              <button className="single-btn btn btn-primary mb-3 btn-lg">
                Add to Cart
              </button>
              <Link to="/" className="single-btn btn btn-primary btn-lg">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
