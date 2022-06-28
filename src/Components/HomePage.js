import PostList from './PostList';
import React, { useEffect, useState} from 'react';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts));
    }, []);

    console.log(posts);
   

    return (
        <div className="homepage">
            <PostList posts={posts} title="All Posts" />
        </div>
    );
}
export default HomePage;