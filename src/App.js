import './App.css';
import Cards from "./components/Cards"
import data from "./data.js";
import logo from "./logo.png";


function App() {

  const cards = data.map(item => {
    return (
      <Cards
        key={data.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width="40px" />
        <span className="span--title">My airplane travel journal</span>

      </header>
      <div className="card--board">
        {cards}

      </div>
    </div>
  );
}

export default App;
