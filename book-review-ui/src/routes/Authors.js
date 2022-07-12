import React from 'react';
import {useQuery, gql} from '@apollo/client'
import { Outlet, Link } from 'react-router-dom';

const GET_AUTHORS = gql`
    query {
    authors {
        id,
        name,
        books {
        id,
        name
        }
    }
    }
`
function GetAuthors() {
    const { loading, error, data } = useQuery(GET_AUTHORS);
    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;
    return data.authors.map(({id, name, books}) => (
        <Link 
            key={id}
            style={{display: "block", margin: "1rem 0"}}
            to={`/authors/${id}`}
        >
            { name }
        </Link>
    ))
}

class Authors extends React.Component {
    render() {
        return (
        <div>
            <h1>Authors</h1>
            <nav style={{
                borderRight: "solid 1px",
                padding: "1rem"
            }}>
                <GetAuthors></GetAuthors>
            </nav>
            <p>The Authors info will go here</p>
            <Outlet />
        </div>

        )
    }
}

export default Authors