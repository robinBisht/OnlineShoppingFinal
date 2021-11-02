import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setCart } from "../redux/actions/cartActions";
import { setCustomer } from "../redux/actions/customerActions";

function CustomerDetails() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.userVal);
  const customer= useSelector((state) => state.customer.customerData);

  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobileNo(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  let customerData = {};
  
  const handleSubmit = (event) => {
    event.preventDefault();
    customerData = {
      firstName: firstname,
      lastName: lastname,
      mobileNumber: mobileNo,
      email: email,
    };
    axios
      .post(`http://localhost:9092/customers/create`, customerData)
      .then((res) => {
        axios
          .get(
            `http://localhost:9092/users/${userData.id}/${res.data.customerId}`
          )
          .then((response) => {
            console.log(response);
            dispatch(setCustomer(response.data));
            // setting customer cart
            axios
              .get(
                `http://localhost:9092/customer/${response.data.customerId}/cart`
              )
              .then((resp) => dispatch(setCart(resp.data)))
              .catch((e) => {
                console.log(e);
              });
          })
          .catch((err) => {
            console.log(err);
          });

        history.push("/");
      })
      .catch((error) => {
        console.log("Error reached");
        console.log(error);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    customerData = {
      firstName: firstname,
      lastName: lastname,
      mobileNumber: mobileNo,
      email: email,
    };
    axios.put(`http://localhost:9092/customers/${customer.id}/update`,customerData)
    .then((response)=>{
      dispatch(setCustomer(response.data))
      console.log(response.data)
      history.push("/customers")
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  return (
    <div className="col justify-content-center">
      <div className="card">
        <h1 className="card-header"> Add Customer Details </h1>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                id="firstname"
                name="firstname"
                className="form-control"
                type="text"
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                id="lastname"
                name="lastname"
                className="form-control"
                type="text"
                onChange={handleLastNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                className="form-control"
                type="text"
                onChange={handleMobileChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className="form-control"
                type="email"
                onChange={handleEmailChange}
              />
            </div>
            {customer.firstname === "" ? <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button> : <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button> }
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
