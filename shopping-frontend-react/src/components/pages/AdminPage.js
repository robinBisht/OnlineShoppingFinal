import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
function AdminPage() {

  const admin = useSelector((state)=> state.user.userVal)
  const history = useHistory()
  useEffect(()=>{
    if( admin.isLoggedIn == false ){
      history.push("/")
    }
  },[])


  return (
    <div className="container">
      <h1 className="display-1"> ADMIN PAGE </h1>
      <div className="card">
        <div className="jumbotron">
          <h1 className="display-4">Hello, Admin</h1>
          <p className="lead">
            This is a Admin Page and here you can do tasks like adding or deleting new products. Also one can add or remove categories and even set the categories of the products
          </p>
          <hr className="my-4" />
          <p>
            Below Link will take you to page where you can see all products and delete them.
          </p>
          <p className="lead">
            <Link to="/admin/products">
            <button className="btn btn-primary btn-lg">
                Prodcut Page
            </button>
            </Link>
          </p>
          <hr className="my-4" />
          <p>
          Below Link will take you to page where you can add new products
          </p>
          <p className="lead">
            <Link to="/admin/products/create">
            <button className="btn btn-primary btn-lg">
                Add Products
            </button>
            </Link>
          </p>
          <hr className="my-4" />
          <p>
            Below Link will take you to page where you can view and add categories
          </p>
          <p className="lead">
            <Link to="/categories">
            <button className="btn btn-primary btn-lg">
                Category Page
            </button>
            </Link>
          </p>
        </div>
        <div className="card-body"></div>
      </div>
    </div>
  );
}

export default AdminPage;
