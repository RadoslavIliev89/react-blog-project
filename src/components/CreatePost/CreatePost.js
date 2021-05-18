import './CreatePost.css';
import * as postService from '../services/postServices';
import { useState, useEffect } from 'react';
const CreatePost = ({ history, match }) => {

    const [currentPost, setCurrentPost] = useState('');
    const postId = match.params.id;

    useEffect(()=>{

        if (postId) {
                postService.getOne(postId)
                    .then(res => setCurrentPost(res.val()))
        }
    },[])
    const onChangeHandler = (e) => {
        e.preventDefault();

        const { title, category, imageURL, description } = e.target
        // verifikaciq za populneni danii

        postService.create(title.value, category.value, imageURL.value, description.value,)
            .then(() => {
                history.push('/')
            });

    }
    const onEditHandler = (e) => {
        e.preventDefault()

        const { title, category, imageURL, description } = e.target
        // verifikaciq za populneni danii

        postService.update(title.value, category.value, imageURL.value, description.value,postId)
            .then(() => {
                history.push(`/current-post/${postId}`)
            });

    }
    return (
        <section className="create-section">
            <form onSubmit={postId ? onEditHandler : onChangeHandler}>
                <h1>{postId?'Edit post':'Create post'}</h1>
                <fieldset className="form">
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" defaultValue={postId? currentPost.title : ''} />
                    </p>
                    <p>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" defaultValue={postId? currentPost.category : ''} />
                    </p>
                    <p>
                        <label htmlFor="imageUrl">ImageURL</label>
                        <input type="text" name="imageURL" defaultValue={postId? currentPost.imageURL : ''}/>
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" defaultValue={postId? currentPost.description : ''} />
                    </p>
                    <input type="submit" value={postId?'Save':'Create'} />
                </fieldset>
            </form>
        </section>
    )
}
export default CreatePost;