import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addProduct } from "../redux/actions/productActions";

function AddProduct() {
    let productData = {}
    const dispatch = useDispatch();
    const history = useHistory();

    const handleProductName = (e) => {
        productData[e.target.name] =  e.target.value
    }
    
    const handleProductPrice = (e) => {
        productData[e.target.name] =  e.target.value
    }
    const handleProductColor = (e) => {
        productData[e.target.name] =  e.target.value
    }
    const handleProductDimension = (e) => {
        productData[e.target.name] =  e.target.value
    }
    const handleProductSpecification = (e) => {
        productData[e.target.name] =  e.target.value
    }
    const handleProductManufacturer = (e) => {
        productData[e.target.name] =  e.target.value
    }
    const handleProductQuantity = (e) => {
        productData[e.target.name] =  e.target.value
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:9092/products/create`,productData)
        .then((response)=>{
            dispatch( addProduct(response.data) )
            history.push('/admin/products')
        })
        .catch((error)=>{
            console.log(error)
        })


    }
  return (
    <div className="container">
     
      <div className="card mt-4">
        <div className="card-body">
        <h3 className="display-3">Add New Product</h3>
          <form>
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                name="productName"
                placeholder="Enter Product Name"
                onChange={handleProductName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Enter Price"
                onChange={handleProductPrice}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                className="form-control"
                id="color"
                name="color"
                placeholder="Enter product color"
                onChange={handleProductColor}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dimension">Dimension</label>
              <input
                type="text"
                className="form-control"
                id="dimension"
                name="dimension"
                placeholder="Enter product dimension"
                onChange={handleProductDimension}
              />
            </div>
            <div className="form-group">
              <label htmlFor="specification">Specification</label>
              <input
                type="text"
                className="form-control"
                id="specification"
                name="specification"
                placeholder="Enter product specification"
                onChange={handleProductSpecification}
              />
            </div>
            <div className="form-group">
              <label htmlFor="manufacturer">Manufacturer</label>
              <input
                type="text"
                className="form-control"
                id="manufacturer"
                name="manufacturer"
                placeholder="Enter Manufacturer"
                onChange={handleProductManufacturer}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                placeholder="Enter Quantity"
                onChange={handleProductQuantity}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
