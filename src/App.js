import { Route, Switch } from "react-router-dom";
import "./App.css";
import GlobalProvider from "./Context/GlobalContext";
import PrivateRoute from "./Layout/PrivateRoute";
import PublicRoute from "./Layout/PublicRoute";
import Basket from "./Pages/Basket";
import ConfirmOrder from "./Pages/ConfirmOrder";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import PaymentMethod from "./Pages/PaymentMethod";
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
        <PrivateRoute exact path="/shippingAddress" component={ShippingForm} />
        <PrivateRoute exact path="/paymentMethod" component={PaymentMethod} />
        <PrivateRoute exact path="/confirmOrder" component={ConfirmOrder} />
        <PrivateRoute exact path="/order" component={Order} />
        <PublicRoute exact path="/signin" component={SignIn} />
        <PublicRoute exact path="/signup" component={SignUp} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
