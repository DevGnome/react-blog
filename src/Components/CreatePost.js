import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    // const [topic, setTopic] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body};

        fetch('http://localhost:3004/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(() => { navigate('/'); })
    }
    return (
        // <div className="post-form">
        //     <h1>Create A New Post</h1>
        //     <form onSubmit={handleSubmit}>
        //         <label>Title:</label>
        //         <br />
        //         <input
        //             type="text"
        //             value={title}
        //             onChange={(e) => setTitle(e.target.value)}
        //         />
        //         <br />
        //         <label>Body:</label>
        //         <br />
        //         <textarea
        //             required
        //             value={body}
        //             onChange={(e) => setBody(e.target.value)}
        //         />
        //         <br />
        //         <label>Author:</label>
        //         <br />
        //         <input
        //             type="text"
        //             value={author}
        //             onChange={(e) => setAuthor(e.target.value)}
        //         />
        //         <br />
        //         <button type="submit">Submit</button>
        //     </form>
        // </div>
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} required
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Body"
                    variant="outlined"
                    multiline
                    rowsMax={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)} required
                />
                <TextField
                    id="outlined-basic"
                    label="Author"
                    variant="outlined"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} required
                />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </Box>

    );
}

export default CreatePost;