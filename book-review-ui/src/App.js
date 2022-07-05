import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/books">Books</Link> |{" "}
        <Link to="/authors">Authors</Link>
      </nav>
    </div>
  );
}

export default App;
