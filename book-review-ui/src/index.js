import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authors from './routes/Authors'
import Author from './routes/Author'
import Books from './routes/Books'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="authors" element={<Authors />} >
            <Route
              index
              element= {
                <main style={{ padding: "1rem" }}>
                  <p>Select an author</p>
                </main>
              }
            />
            <Route path=":authorId" element={ <Author /> }/>
          </Route>
          <Route path="books" element={<Books />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
