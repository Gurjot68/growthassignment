import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Form from "./components/form";
import Type from "./components/type";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/type" component={Type} />
        <Route path="/" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
