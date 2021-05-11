import { Link } from 'react-router-dom';
const PostCard = (props) => {

    return (
        <li>
                <Link  to={"/current-post/" + `${props.id}`} >
                <h1>{props.title}</h1>
                <p>Category: {props.category}</p>
                <p><img className="img" src={props.imageURL} /></p>
                <p className="description">{props.description}</p>
            </Link>
            </li>
);
}
export default PostCard;