import React from 'react';
import TopNav from '../components/TopNav';
import {useQuery, gql} from '@apollo/client'

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
            <TopNav></TopNav>
            <GetAuthors></GetAuthors>
            <p>The Authors info will go here</p>
        </div>

        )
    }
}

export default Authors