import *as postServices from '../services/postServices';
import { useState, useEffect } from 'react';

const CurrentPost = ({ match }) => {
    const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
        postServices.getOne(match.params.id)
            .then(res => {
                setCurrentPost(res.val())
            })
    }, [])

    console.log(currentPost);
    return (
        <div>
            <div className="actions">
                <a href="#edit">Edit</a>
                <a href="#delete">Delete</a>
            </div>
            <h1>{currentPost.title}</h1>
            <h1>{currentPost.description}</h1>
          <img src={currentPost.imageURL} />
            <h1>{currentPost.category}</h1>
        </div>

    );


}
export default CurrentPost;