import logo from './logo.svg';
import './App.css';
import  Content from './Components/Content/Content.js'
import CountriesSelector from './Components/CountriesSelector/CountriesSelector.js'

function App() {
  return (
    <div className="App">
      <CountriesSelector/>
        <Content/>


    </div>
  );
}

export default App;
