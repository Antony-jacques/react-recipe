import logo from './logo.svg';
import './App.css';
import  Content from './Components/Content/Content.js'
import CountriesSelector from './Components/CountriesSelector/CountriesSelector.js'
import ContextProvider from './Components/Context/Context.js'

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
