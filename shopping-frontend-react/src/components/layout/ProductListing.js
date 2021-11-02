import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCart } from "../redux/actions/cartActions";
import { setProducts } from "../redux/actions/productActions";

function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.userVal);
  const customer = useSelector((state) => state.customer.customerData);

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:9092/products")
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
    dispatch(setProducts(response.data));
  };
  const handleAddCart = (productId) => {
    axios.post(`http://localhost:9092/customer/${customer.id}/cart/add-product/${productId}`)
      .then((response) => {
        console.log(response)
        dispatch( addCart(response.data) )
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const renderList = products.map((product) => {
    return (
      <div className="col-sm-4 d-flex justify-content-around" key={product.productId}>
        <div className="card shadow p-3 mb-5 rounded mt-3" style={{width:"30rem"}} >
          <div className="card-body card-body-cascade">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4"> {product.productName} </h1>
                <hr />
                </div>
                </div>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-success h5">
                    Price: {product.price}
                  </li>
                  <li className="list-group-item list-group-item-info h5">
                    Color: {product.color}
                  </li>
                  <li className="list-group-item list-group-item-info h5">
                    Dimension: {product.dimension}
                  </li>
                  <li className="list-group-item list-group-item-info h5">
                    Specification: {product.specification}
                  </li>
                  <li className="list-group-item list-group-item-info h5">
                    Manufacturer: {product.manufacturer}
                  </li>
                </ul>
                {user.isLoggedIn && (
                  <p className="lead">
                    <button
                      className="btn-floating btn-primary btn-lg mt-4"
                      onClick={() => handleAddCart(product.productId)}
                    >
                      Add To Cart
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
      //   </div>
      // </div>
    );
  });

  return (
    <div className="mt-4">
      <div className="row">{renderList}</div>
    </div>
  );
}

export default ProductListing;
