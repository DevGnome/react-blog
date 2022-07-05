import { Link } from 'react-router-dom';


// function PostList({posts, title}) {
//     return (
//         // <div className="post-list">
//         //     {/* <h1> All Blog Posts</h1>
//         //     const postListItems = {posts.map(post => (
//         //         <div className='post-list-item' key={post.id}>
//         //             <Link to={`/posts/${post.id}`}>
//         //                 <h3>{post.title}</h3>
//         //             </Link>
//         //                 <p>Written by {posts.author}</p>
//         //         </div>
//         //     ))} */}
//     );         
// }
    
const PostList = ({posts}) => {
    
    return ( 
        <div className="post-list">
            <div className="title">
                {/* <h2>All Posts</h2> */}
            </div>
            
            {posts.map(post=> (
                <div className="list-items" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>Written by {post.author}</p>
                </div>
            ))}
        </div>
     );
}

export default PostList;