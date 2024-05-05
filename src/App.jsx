import './App.css';
import Component1 from './Component1';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          Updating again a component<span className="heart">♥️</span> React
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/ajaymane028iitm
          </a>
        </p>
      </header>
      <Component1 />
    </div>
    
  
  );
}

export default App;
