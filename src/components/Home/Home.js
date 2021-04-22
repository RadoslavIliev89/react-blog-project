import './Home.css';
import PostCard from './PostCard/PostCard';
import * as postService from '../services/postServices';
import firebase from '../../utils/firebaseDB';

const firebaseDb = firebase.database().ref('posts');
const Home = () => {


    firebaseDb.on('value', getData)
    function getData(data) {
        console.log( typeof data.val());
       
    }




    return (
        <div className="create">
            <h1>Home page</h1>
            <ul className="posts-lists">
                {[].map(x =>
                    <PostCard post={x} />
                )}
            </ul>
        </div>

    );
};
export default Home;
