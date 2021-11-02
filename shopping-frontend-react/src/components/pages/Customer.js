import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CustomerTable from "./CustomerTable";
import ShowAddress from "./ShowAddress";
import { useHistory } from "react-router";
function Customer(){
    const customerData = useSelector((state)=> state.customer.customerData)
    const userState = useSelector((state)=> state.user.userVal)
    const history = useHistory();
    const address = useSelector((state)=>  state.address.address)
    const addressArray = Object.keys(address);

    useEffect(()=>{
      if( userState.isLoggedIn === false ){
        history.push("/")
      }
    },[]);

    return (
        <div className="container">
      <h1 className="display-1"> CUSTOMER PAGE </h1>
      <div className="card">
        <div className="jumbotron">
          <h1 className="display-4">Hello, {customerData.firstname} {customerData.lastname} </h1>
          <p className="lead">
            This is a your Personal Page and here you can do tasks like adding or deleting products to your cart. There are links to update your data and add your address
          </p>
          <hr className="my-4" />
          <p className="lead">
            Below Link will take you to page where you can see all items in your cart.
          </p>
          <p className="lead">
            <Link to="/customers/cart">
            <button className="btn btn-secondary btn-lg">
                Carts
            </button>
            </Link>
          </p>
          <hr className="my-4" />
          <p className="lead">
          Below Link will take you to page where you can add/update your address
          </p>
          <p className="lead">
            <Link to="/address/create">
            <button className="btn btn-primary btn-lg">
                { addressArray.length === 0 ? "Add Address":"Update Address" }
            </button>
            </Link>
          </p>
          <hr className="my-4" />
          <p>
            Below are your personal data
          </p>
          <CustomerTable/>
{ addressArray.length >0
 &&
  <div>
     <p>Below are your address details </p>
     <ShowAddress/>
      </div> 
      }
        </div>
      </div>
    </div>
    )
}

export default Customer