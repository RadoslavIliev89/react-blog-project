import { Link } from 'react-router-dom';
const PostCard = (props) => {

    return (
        <div className="col-12 col-sm-3">
            <Link to={"/current-post/" + `${props.id}`} >
                <h1>{props.title}</h1>
                <img className="img-fluid" src={props.imageURL} />

                <p>Category: {props.category}</p>
                <p className="description">{props.description}</p>
            </Link>
        </div>
    );
}
export default PostCard;