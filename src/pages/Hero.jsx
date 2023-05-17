import UseFetch from "../Hooks/UseFetch";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = ({ cartItem, setCartItem }) => {
  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = UseFetch("https://fakestoreapi.com/products/14");
  const { data: data3, loading: loading3 } = UseFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );

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

  console.log(cartItem.length);

  return (
    <div className="container hero-container">
      <h2> {loading3 && <ClipLoader color={"red"} size={150} />}</h2>
      {error2 && <h2>{error2.message}</h2>}

      <div className="row justify-content-between gap-5">
        <div className="col-sm-12 col-lg-6 shadow-sm border border-5 rounded">
          <img className="w-100 hero-img" src={data2.image} alt="" />
        </div>
        {/* Card section */}
        <div className="col-sm-12 col-lg-5">
          <div className="card-container mt-sm-4">
            {data3.map((datum3) => {
              const { id, title, image, price } = datum3;
              return (
                <div
                  className="h-100 p-1 text-center card-inner shadow-sm rounded border-3 border"
                  key={id}
                >
                  <Link
                    className="text-decoration-none"
                    to={`/SingleProduct/${id}`}
                  >
                    <img className="img-fluid w-100" src={image} alt={title} />
                    <p className="fw-bold">${price} </p>
                  </Link>
                  <button
                    onClick={() => handleAddToCart(datum3)}
                    className="btn btn-primary text-white"
                  >
                    add to cart
                  </button>
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
