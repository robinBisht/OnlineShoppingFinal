import { useSelector } from "react-redux";

function ShowAddress() {
    const address = useSelector((state)=>  state.address.address)
  return (
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Street No</th>
        <th scope="col">Building Name</th>
        <th scope="col">City</th>
        <th scope="col">State</th>
        <th scope="col">Country</th>
        <th scope="col">Pincode</th>
      </tr>
    </thead>
    <tbody>
      <tr className="table-success">
        <td> {address.streetNo} </td>
        <td> {address.buildingName} </td>
        <td> {address.city} </td>
        <td> {address.state} </td>
        <td> {address.country} </td>
        <td> {address.pincode} </td>
      </tr>
    </tbody>
  </table> 
  );
}

export default ShowAddress;
