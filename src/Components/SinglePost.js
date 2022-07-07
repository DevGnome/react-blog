import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { Typography, Button } from '@mui/material';


function SinglePost() {
    const { id } = useParams();
    const [post] = useFetch(`http://localhost:3004/posts/${id}`);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:3004/posts/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/'); 
        });
    }

    
    return (
        <div className="single-post">
            <div className="post-title">
                <Typography variant="h3">{post.title}</Typography>
                <Typography variant="caption">Created on {post.created}</Typography>
            </div>
            <div className="post-body">
                <Typography variant="body1">{post.body}</Typography>
                <br />
                <br />
                <Typography variant="body2">By {post.author}</Typography>
            </div>
            <Button variant="contained" onClick={handleDelete}>Delete Post</Button>
        </div>
    );

}


export default SinglePost;