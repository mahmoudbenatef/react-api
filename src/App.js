import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ProductComponent from './components/ProductComponent';
import { ProductDetails } from "./containers/ProductDetails"
import { ProductListing } from "./containers/ProductListing"

function App() {
  return (
    <>
      <HeaderComponent />
      <div style={{ marginTop: "10vh" }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <ProductListing />
            </Route>
            <Route exact path="/product">
              <ProductComponent />
            </Route>
            <Route exact path="/product-details/:id">
              <ProductDetails />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
