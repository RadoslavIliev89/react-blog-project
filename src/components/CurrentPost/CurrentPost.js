import *as postServices from '../services/postServices';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CurrentPost = ({ match, history }) => {
    const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
        postServices.getOne(match.params.id)
            .then(res => {
                setCurrentPost(res.val())
            })
    }, [])

    const asd = () => {
        postServices.deletePost(match.params.id)
            .then(res => { 
                history.push('/')
            })
    }
    return (
        <div>

            <h1>{currentPost.title}</h1>
            <h1>{currentPost.description}</h1>
            <img src={currentPost.imageURL} />
            <h1>{currentPost.category}</h1>
            <Link to="/edit">Edit</Link>
            <Link to="#"><button onClick={asd}>Delete</button></Link>
        </div>

    );


}
export default CurrentPost;