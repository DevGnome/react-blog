import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { Button, TextField, Box } from '@mui/material';
// const { format } = require('date-fns');

function CreatePost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();
    const today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { title, body, author, created: today};
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
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="create-post-form">
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} required
                />
                <br />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Body"
                    variant="outlined"
                    multiline
                    rows={10}
                    value={body}
                    onChange={(e) => setBody(e.target.value)} required
                />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Author"
                    variant="outlined"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} required
                />
                <br />
                <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
        </Box>

    );
}

export default CreatePost;