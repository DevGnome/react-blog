import { Link } from 'react-router-dom';
    
const PostList = ({posts}) => {
    let sortedPosts = posts.slice().sort((a, b) => b.id - a.id);

    return ( 
        <div className="post-list">
            <div className="title">
                {/* <h2>All Posts</h2> */}
            </div>
            {sortedPosts.map(post=> (
                <div className="list-items" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <h6>Created {post.created}</h6>
                    <p>Written by {post.author}</p>
                </div>
            ))}
        </div>
     );
}

export default PostList;