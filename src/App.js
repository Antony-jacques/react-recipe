import logo from './logo.svg';
import './App.css';
import  Content from './Components/Content/Content.js'
import CountriesSelector from './Components/CountriesSelector/CountriesSelector.js'
import ContextProvider from './Components/Context/Context.js'
import FetchMeal from './Components/FetchMeal/FetchMeal.js'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <CountriesSelector/>
        <Content/>
        </ContextProvider>


    </div>
  );
}

export default App;
