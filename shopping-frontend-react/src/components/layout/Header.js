import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addAddress } from "../redux/actions/addressAction";
import { setCustomer } from "../redux/actions/customerActions";
import { logoutUser } from "../redux/actions/userActions";

function Header(){

    const userVal = useSelector((state) => state.user.userVal);
    const userProducts = useSelector((state)=> state.cart.products)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogOut = ()=>{
      dispatch( logoutUser() )
      dispatch( addAddress({}) )
      dispatch( setCustomer({firstName:"",lastName:"",mobileNumber:"",email:"",cart:{products:[]}}) )
      history.push('/')
    }
 
    return(
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark justify-content-between">
      <Link to="/"><span className="navbar-brand">Online Shopping</span></Link>
      <div className="navbar-nav navbar-right">
      <ul className="nav navbar-nav">

          { userVal.isLoggedIn===false && <li><Link to="/users/create"> <span className="nav-link">Sign Up</span> </Link></li> }

          { userVal.isLoggedIn===false &&  <li><Link to="/users/login"> <span className="nav-link">Login</span> </Link></li> }
       
          { userVal.isLoggedIn && userVal.isAdmin && <li><Link to="/admin"> <span className="nav-link">Admin Page</span> </Link></li> }
          { userVal.isLoggedIn && <li> <Link to="/customers"><span className="nav-link"> {userVal.username}<span className="badge badge-primary"> {userProducts.length} </span> </span></Link></li> }
          { userVal.isLoggedIn && <li onClick={handleLogOut} > <span className="nav-link">Log Out</span> </li> }
      </ul>
      </div>
    </nav>
    )
}
export default Header;