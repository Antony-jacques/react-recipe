import logo from './logo.svg';
import './App.css';
import  Content from './Components/Content/Content.js'
import CountriesSelector from './Components/CountriesSelector/CountriesSelector.js'
import ContextProvider from './Components/Context/Context.js'
import FetchMeal from './Components/FetchMeal/FetchMeal.js'
import HomePage from './Components/HomePage/HomePage.js'
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
        <HomePage/>
        </Router>
        </ContextProvider>


    </div>
  );
}

export default App;
