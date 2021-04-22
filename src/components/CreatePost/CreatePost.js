import './CreatePost.css';
import * as postService from '../services/postServices';
const CreatePost = () => {
   
    const onChangeHandler = (e) => {
        e.preventDefault();
        const { title, category, imageURL, description } = e.target
        postService.create(title.value,category.value,imageURL.value,description.value, )
        
    }
    return (
        <section className="create-section">
            <form onSubmit={onChangeHandler}>
                <fieldset className="form">
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" />
                    </p>
                    <p>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" />
                    </p>
                    <p>
                        <label htmlFor="imageUrl">ImageURL</label>
                        <input type="text" name="imageURL" />
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" />
                    </p>
                    <input type="submit" value="Create" />
                </fieldset>
            </form>
        </section>
    )
}
export default CreatePost;