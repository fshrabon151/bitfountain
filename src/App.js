import { Route, Switch } from "react-router-dom";
import AddNewModel from "./components/Homepage/AddNewModel";
import Homepage from "./components/Homepage/Homepage";
import SelectedModel from "./components/Homepage/innerComponent/SelectedModel";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      {/**
       * Creating requred paths
       */}

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/modeltype" component={Homepage} />
        <Route
          exact
          path="/modeldata/:brand/:model"
          component={SelectedModel}
        />
        <Route exact path="/devicemodel" component={AddNewModel} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
