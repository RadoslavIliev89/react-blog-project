const PostCard=({post}) => {

return (
    <li>
    <h1>{post.title}</h1>
    <p>Category: {post.category}</p>
    <p><img className="img" src={post.imageUrl} /></p>
    <p className="description">{post.description}</p>
</li>
);
}
export default PostCard;