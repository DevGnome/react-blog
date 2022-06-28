import React from 'react';

function SinglePost({ title, body, author }) {
    function handleDelete() {
        console.log('delete');
    }
    
    return (
        <div className="single-post">
            <h1>{title}</h1>
            <h4>Written by {author}</h4>
            <p>{body}</p>
        </div>
    );
}

export default SinglePost;