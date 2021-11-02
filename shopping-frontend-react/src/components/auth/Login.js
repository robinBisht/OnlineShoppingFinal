import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addAddress } from "../redux/actions/addressAction";
import { setCart } from "../redux/actions/cartActions";
import { setCustomer } from "../redux/actions/customerActions";
import { loginUser } from "../redux/actions/userActions";

function Login() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    var idForCustomer = 1;
    const url = `http://localhost:9092/users/login/${userName}/${password}`
    axios(url).then((response)=>{
      console.log(response)
      let userId = response.data.userId;
      dispatch(loginUser(response.data))
      
      //get customer data
      axios.get( `http://localhost:9092/users/${userId}/customer`)
      .then( (res) => {
        dispatch( setCustomer(res.data) )
        idForCustomer = res.data.customerId
        // setting up cart
        axios.get(`http://localhost:9092/customer/${res.data.customerId}/cart`).then( (resp)=> dispatch(setCart(resp.data)) ).catch((e)=>{console.log(e)})
      } )
      .catch((err)=>{
        console.log(err)
      })
      //getting address
      axios.get(`http://localhost:9092/customers/${idForCustomer}/address`)
      .then((r) => {
        dispatch(addAddress(r.data))
      })
      .catch((err)=> { console.log(err) })
      history.push('/')
    }).catch((error)=>{
      alert("Invalid Credentials")
      console.log(error)
    })
    
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleUserChange = (e) => {
    setUserName(e.target.value)
  }
  return (
    <div className="container mt-4">
      <div className="col justify-content-center">
        <div className="card">
          <h1 className="card-header"> Login </h1>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  onChange={handleUserChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
