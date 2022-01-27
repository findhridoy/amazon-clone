import { Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </>
  );
}

export default App;
