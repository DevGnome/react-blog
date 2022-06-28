import PostList from './PostList';

// import React, { useEffect, useState} from 'react';

function HomePage({posts}){
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3004/posts')
    //         .then(response => response.json())
    //         .then(posts => setPosts(posts));
    // }, []);

    // console.log(posts);
   

    return (
        <div className="homepage">
            <PostList
                title="All Posts"
                posts={posts}
            />
        </div>
    );
}
export default HomePage;