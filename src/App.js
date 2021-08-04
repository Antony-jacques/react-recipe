import "./App.css";
import ContextProvider from "./Components/Context/Context.js";
import HomePage from "./Components/HomePage/HomePage.js";
import SingleRecipe from "./Components/SingleRecipe/SingleRecipe.js";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"
    >
      <div className="content-wrap">

      <ContextProvider>
        <Router>
          <Switch>
          <Route path="/" exact component ={HomePage}/>

            <Route path="/single"exact component ={SingleRecipe}/>
            <Route path="/single/:slug"exact component ={SingleRecipe} />

            <Route path="/"  component ={() =>  <div>Erreur 404</div>  }/>



          </Switch>
        </Router>
      </ContextProvider>
      </div>
    </div>
  );
}

export default App;
