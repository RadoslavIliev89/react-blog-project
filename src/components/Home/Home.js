import './Home.css';
import PostCard from './PostCard/PostCard';
import * as postServices from '../services/postServices'
import { useState, useEffect } from 'react'


const Home = () => {
    const [post, setPost] = useState('');

    useEffect(() => {
        postServices.getAll()
            .then(res => setPost(res.val().posts))
    }, [])


    return (
        <div className="create">
            <h1>Home page</h1>
            <ul className="posts-lists">
                {Object.entries(post).map(x =>
                    <PostCard key={x[0]}{...x[1]} />
                )}
            </ul>
        </div>

    );
};
export default Home;
