import React from 'react';
import { useParams } from 'react-router-dom';

class Author extends React.Component {
    render() {
        let params = useParams();

        return (
        <div>
            <p>Single Author: {params.authorId}</p>
        </div>
        )
    }
}

export default Author