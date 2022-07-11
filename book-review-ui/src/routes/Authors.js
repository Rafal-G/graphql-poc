import React from 'react';
import {useQuery, gql} from '@apollo/client'
import { Outlet } from 'react-router-dom';

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
        <div key={id}>
            <h3> { name } </h3>
        </div>
    ))
}
class Authors extends React.Component {
    render() {
        return (
        <div>
            <GetAuthors></GetAuthors>
            <p>The Authors info will go here</p>
            <Outlet />
        </div>

        )
    }
}

export default Authors