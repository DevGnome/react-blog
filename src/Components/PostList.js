import { Link } from 'react-router-dom';


function PostList(posts) {
    return (
        <div className="post-list">
            <h1> All Blog Posts</h1>
            {posts.map(post => (
                <div className='post-list-item' key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                        <p>Written by {posts.author}</p>
                </div>
            ))}
        </div>
    );
            
            
}
    
    

export default PostList;