import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from './Hooks/useFetch';


function SinglePost() {
    const { id } = useParams();
    const { data: post } = useFetch(`http://localhost:3004/blogs/${id}`);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:3004/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate.pushState('/'); 
        });
    }

    return (
        <div className="single-post">
            <article >
                <h1>{post.title}</h1>
                <p>Written by {post.author}</p>
                <p>{post.body}</p>
                <button onClick={handleDelete}>Delete Post</button>
            </article>
        </div>
    );
}
//     return (
//         <div className="single-post">
//             <h1>{title}</h1>
//             <h4>Written by {author}</h4>
//             <p>{body}</p>
//             {/* <button onClick={handleDeleteClick} className="emoji-button delete">
//                 🗑
//             </button> */}
//         </div>
//     );
// }

export default SinglePost;