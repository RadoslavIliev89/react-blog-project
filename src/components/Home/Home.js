import './Home.css';
import CreatePost from '../CreatePost/CreatePost'
import PostCard from './PostCard/PostCard';

const Home = () => {

  


    return (
        <div className="create">
            <CreatePost />
            <ul className="posts-lists">
                {[].map(x =>
                    <PostCard post={x} />
                )}
            </ul>
        </div>

    );
};
export default Home;
