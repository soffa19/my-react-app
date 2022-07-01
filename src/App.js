import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
 
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Switch>
              <Route exact path="/">
                <ProductList />
              </Route>
              <Route path="/add">
                <AddProduct />
              </Route>
              <Route path="/edit/:id">
                <EditProduct />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
 
export default App;