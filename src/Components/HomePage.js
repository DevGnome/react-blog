import PostList from './PostList';
import useFetch from '../Hooks/useFetch';


function HomePage(){
    const [posts] = useFetch('http://localhost:3004/posts');
    console.log(posts);
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
