import './App.css';
import Header from './components/layout/Header';
import {Route,Switch, BrowserRouter } from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import HomePage from './components/pages/HomePage';
import CustomerDetails from './components/pages/CustomerDetails';
import AddressDetails from './components/pages/AddressDetails';
import CategoryPage from './components/pages/CategoryPage';
import AdminProduct from './components/pages/AdminProduct';
import Customer from './components/pages/Customer';
import AdminPage from './components/pages/AdminPage';
import AddProduct from './components/pages/AddProduct';
import CartPage from './components/pages/CartPage';

function App() {
  return (
      <BrowserRouter>
        <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}>
        </Route>
        <Route exact path="/users/create" component={Signup}>
        </Route>
        <Route exact path="/users/login" component={Login}>
        </Route>
        <Route exact path="/customers/create" component={CustomerDetails}>
        </Route>
        <Route exact path="/customers" component={Customer}>
        </Route>
        <Route exact path="/customers/cart" component={CartPage}>
        </Route>
        <Route exact path="/address/create" component={AddressDetails}>
        </Route>
        <Route exact path="/categories" component={CategoryPage}>
        </Route>
        <Route exact path="/admin/products" component={AdminProduct}>
        </Route>
        <Route exact path="/admin/products/create" component={AddProduct}>
        </Route>
        <Route exact path="/admin" component={AdminPage}>
        </Route>
      </Switch>
      </BrowserRouter>
  );
}


export default App;
