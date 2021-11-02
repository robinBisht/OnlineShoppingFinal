import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CustomerTable(){
    const customerData = useSelector((state)=> state.customer.customerData)
    let customerEmpty = customerData.firstname === ""
    return (
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-success">
      <td> {customerData.firstname}</td>
      <td>{customerData.lastname}</td>
      <td>{customerData.mobileNo}</td>
      <td>{customerData.email}</td>
      <td> <Link to="/customers/create" ><button className="btn btn-primary"> { customerEmpty ? "Add" : "Update" } </button> </Link>  </td>
    </tr>
  </tbody>
</table>
    )
}

export default CustomerTable;