import { useParams } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const SingleProduct = () => {
  const { id } = useParams();
  const {data, loading} = useFetch(`https://fakestoreapi.com/products/${id}`);

  const { title, image, description, price } = data;

  return (
    <div>
      <div className="container">
        {loading && <ClipLoader/>}
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-lg-4">
            <img className="w-100" src={image} alt="" />
          </div>
          <div className="col-lg-8">
            <h1 className="text-danger">{title}</h1>
            <h4 className="text-success">{description}</h4>
            <h3>${price}</h3>
            <p>{}</p>
          <div className="d-flex flex-column mt-4">
            <button className="btn btn-primary mb-3 btn-lg">Add to Cart</button>
            <Link to='/' className="btn btn-primary btn-lg">Back to home</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
