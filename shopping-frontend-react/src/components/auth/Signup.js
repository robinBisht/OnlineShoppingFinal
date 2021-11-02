// import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signupUser } from "../redux/actions/userActions";
function Signup() {

  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  let userData = {}
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleUserChange = (e) => {
    setUserName(e.target.value)
  }
  const handleRoleChange =(e)=>{
    setRole(e.target.value)
  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    userData = {
      username:username,
      password:password,
      role:role
    }
    axios.post(`http://localhost:9092/users/create`,userData)
              .then(res =>{
                  dispatch(signupUser(res.data))
                  history.push('/customers/create')
              })
              .catch((error)=>{
                alert("The username already exists")
                console.log(error)
              })

  }

  return (
    <div className="container mt-4">
      <div className="col justify-content-center">
        <div className="card">
          <h1 className="card-header"> Sign Up </h1>
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
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select className="custom-select" id="role" name="role" onChange={handleRoleChange}>
                  <option defaultValue>Choose User Type</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
