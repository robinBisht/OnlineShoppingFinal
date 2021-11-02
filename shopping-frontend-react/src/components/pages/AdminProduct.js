import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/actions/productActions";

function AdminProduct() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteProduct(id));
  }
  const renderList = products.map((product) => {
    return (
      <tr key={product.productId}>
        <td>{product.productName}</td>
        <td>{product.price}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(product.productId)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="mt-4 container">
      <h3 className="display-3">Modify Product</h3>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{renderList}</tbody>
      </table>
    </div>
  );
}
export default AdminProduct;
