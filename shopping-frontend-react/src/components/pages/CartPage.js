import { useSelector } from "react-redux";

function CartPage() {
  const products = useSelector((state) => state.cart.products);
  const renderList = products.map((product) => {
    return (
      <tbody>
        <tr>
          <td>{product.productName}</td>
          <td>{product.price}</td>
        </tr>
      </tbody>
    );
  });
  return (
    <div className="container">
      <h1 className="display-4"> Cart Page</h1>

      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        {renderList}
      </table>
    </div>
  );
}

export default CartPage;
