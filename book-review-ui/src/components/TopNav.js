import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
    render() {    
        return(<div className="App">
            <nav>
                <Link to="/books">Books</Link> |{" "}
                <Link to="/authors">Authors</Link>
            </nav>
        </div>)
    }
}

export default TopNav 