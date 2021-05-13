import *as postServices from '../services/postServices';
import { useState, useEffect } from 'react';
import './currentPost.css'

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
        <div className="current-post">
            <h1>{currentPost.title}</h1>
          <img src={currentPost.imageURL} />
            <p>{currentPost.category}</p>
            <p>{currentPost.description}</p>
            <div className="actions">
            {/* //TODO: hide for anon users */}
                <a href="#edit">Edit</a>
                <a href="#delete">Delete</a>
            </div>
        </div>

    );


}
export default CurrentPost;