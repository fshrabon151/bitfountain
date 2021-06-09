import Header from "./components/Header/Header";
import Loader from "./components/Header/Loader";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Header/Login/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
