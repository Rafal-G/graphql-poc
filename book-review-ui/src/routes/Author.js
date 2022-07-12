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
            <div>
                <AuthorDetail />
            </div>
        )
    }
}

export default Author