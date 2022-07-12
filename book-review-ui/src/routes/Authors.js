import React from 'react';
import {useQuery, gql} from '@apollo/client'
import { Outlet, NavLink } from 'react-router-dom';

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
        <NavLink
            style={({ isActive }) => {
            return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
            };
            }}
            key={id}
            to={`/authors/${id}`}
        >
            { name }
        </NavLink>
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
            <Outlet />
        </div>

        )
    }
}

export default Authors