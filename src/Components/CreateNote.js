import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function CreateNote() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [topic, setTopic] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = { title, body};

        fetch('http://localhost:3004/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
            .then(() => { navigate('/'); })
    }
    return (
        <div className="create-note">
            <h1>Create A New Note</h1>
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
                {/* <label>Author:</label>
                <br />
                <input
                    type="text"
                    value={author}  
                    onChange={(e) => setAuthor(e.target.value)} 
                /> */}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default CreateNote;