import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCategories} from '../redux/actions/categoryActions'

function Category() {

  const categories = useSelector((state) => state.category.categories);
    const dispatch = useDispatch();
    
    const fetchCategories = async ()=>{
        const response = await axios.get("http://localhost:9092/category")
                                .catch((err)=>{
                                    console.log(err)
                                })
        console.log(response)
        dispatch(setCategories(response.data))
    }

    useEffect(() =>{
      fetchCategories()
    },[])
    const renderCategory = categories.map(category => {
      return (
        <li className="list-group-item "> <button class="btn btn-lg btn-block btn-secondary">{category.categoryName}</button>  </li>
      )
    })
  return (
    <div className="card">
      <h3 className="card-header"> All Categories </h3>
      <div className="card-body">
        <div className="jumbotron">
            <ul className="list-group">
            {renderCategory}
            </ul>
        </div>
      </div>
    </div>
  );
}
export default Category;
