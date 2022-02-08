import { Route, Switch } from "react-router-dom";
import "./App.css";
import GlobalProvider from "./Context/GlobalContext";
import Basket from "./Pages/Basket";
import Home from "./Pages/Home";
import ProductByCategory from "./Pages/ProductByCategory";
import ProductDetails from "./Pages/ProductDetails";
import ShippingForm from "./Pages/ShippingForm";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:title" component={ProductByCategory} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/shippingAddress" component={ShippingForm} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
