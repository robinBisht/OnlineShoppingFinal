import axios from "axios";
import { useDispatch } from "react-redux";
import Category from "../layout/Category";
import { addCategory } from "../redux/actions/categoryActions";

function CategoryPage() {
  const dispatch = useDispatch();
  let categoryData = {}

  const handleNameChange = (e)=>{
    categoryData[e.target.name] = e.target.value
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:9092/category/create',categoryData)
    .then((response)=>{
      dispatch(addCategory(response.data))
    })

  }

  return (
    <div className="row mt-4">
      <div className="col-sm-6">
        <Category />
      </div>
      <div className="col-sm-6">
        <div className="card">
          <h3 className="card-header"> Add New Category </h3>
          <div className="card-body">
            <form>
            <div className="form-group">
                <label htmlFor="categoryName">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="categoryName"
                  name="categoryName"
                  placeholder="Enter Category Name"
                  onChange={handleNameChange}
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

export default CategoryPage;
