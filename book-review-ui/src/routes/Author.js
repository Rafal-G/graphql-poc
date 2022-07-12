import React from 'react';
import { useParams } from 'react-router-dom';

function AuthorDetail() {
    let params = useParams();

    return (
    <div>
        <p>Single Author: {params.authorId}</p>
    </div>
    )
}

class Author extends React.Component {
    render() {
        
        return(
            <main style={{padding: "1rem"}}>
                <AuthorDetail />
            </main>
        )
    }
}

export default Author