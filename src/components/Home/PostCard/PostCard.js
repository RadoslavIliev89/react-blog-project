const PostCard=(props) => {
console.log(props);
return (
    <li>
    <h1>{props.title}</h1>
    <p>Category: {props.category}</p>
    <p><img className="img" src={props.imageURL} /></p>
    <p className="description">{props.description}</p>
</li>
);
}
export default PostCard;