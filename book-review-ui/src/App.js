import logo from './logo.svg';
import './App.css';
import Book from './components/Book'
import Author from './components/Author';

function App() {
  return (
    <div className="App">
      <Book />
      <Author />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
