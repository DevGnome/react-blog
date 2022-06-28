import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body, author };

        fetch('http://localhost:3004/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(() => { navigate.pushState('/'); })
    }
    return (
        <div className="create-post">
            <h1>Create A New Post</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <br />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <label>Body:</label>
                <br />
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <br />
                <label>Author:</label>
                <br />
                <input
                    type="text"
                    value={author}  
                    onChange={(e) => setAuthor(e.target.value)} 
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default CreatePost;