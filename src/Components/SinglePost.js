import React from 'react';


function SinglePost({ title, body, author }) {
   // Need delete

        
    

    return (
        <div className="single-post">
            <h1>{title}</h1>
            <h4>Written by {author}</h4>
            <p>{body}</p>
            {/* <button onClick={handleDeleteClick} className="emoji-button delete">
                🗑
            </button> */}
        </div>
    );
}

export default SinglePost;