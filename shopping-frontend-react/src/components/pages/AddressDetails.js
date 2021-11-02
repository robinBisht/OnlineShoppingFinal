import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { addAddress } from "../redux/actions/addressAction";

function AddressDetails() {
  const customer = useSelector((state)=> state.customer.customerData)
  const dispatch = useDispatch();
  const history = useHistory();
  let addressData = {}
  const handleChange = (e)=>{
    addressData[e.target.name] = e.target.value 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:9092/address/create",addressData)
    .then((response)=>{
      //link address to customer
      axios.post(`http://localhost:9092/customers/${customer.id}/address/${response.data.addressId}/create`,{})
      .then((response) => {
        console.log(response.data)
        dispatch( addAddress(response.data) )
      })
      .catch((error)=>{
        console.log(error)
      })
      history.push("/customers")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <h1 className="card-header"> Add Your Address </h1>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="street">Street No.</label>
              <input
                id="street"
                name="streetNo"
                className="form-control"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="buildingName" s>
                Building Name
              </label>
              <input
                id="buildingName"
                name="buildingName"
                className="form-control"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input id="city" name="city" className="form-control" type="text" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input id="state" name="state" className="form-control" type="text" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                name="country"
                className="form-control"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                id="pincode"
                name="pincode"
                className="form-control"
                type="text"
                onChange={handleChange}
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

export default AddressDetails;
