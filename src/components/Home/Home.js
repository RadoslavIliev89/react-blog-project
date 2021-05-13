import './Home.css';
import PostCard from './PostCard/PostCard';
import * as postServices from '../services/postServices'
import { useState, useEffect } from 'react'


const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        postServices.getAll()
            .then(res => {
                const data = [];
                Object.entries(res.val().posts).map(x => {
                    data.push({ ...x[1], id: x[0] })
                })
                setPost(data);
            }

            )
    }, [])


    return (
        <div className="">
            <h1>Home page</h1>
            <div className="container">
                <div className="row">
                    {post.map(x =>

                        < PostCard key={x.id}{...x} />
                    )}
                </div>
            </div>
        </div>
    );
};
export default Home;
