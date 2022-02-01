import { Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import ProductByCategory from "./Pages/ProductByCategory";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:title" component={ProductByCategory} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
}

export default App;
