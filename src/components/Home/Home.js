import './Home.css';
import firebase from '../../utils/firebaseDB';
import PostCard from './PostCard/PostCard';
import { useState } from 'react'

const Home = () => {

    let info = [
        {
            title: 'Some title',
            category: 'Some category',
            imageUrl: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur mollitia voluptas alias quo aperiam temporibus ab et minima ut.'

        },
        {
            title: 'Some title',
            category: 'Some category',
            imageUrl: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consectetur mollitia voluptas alias quo aperiam temporibus ab et minima ut.'

        }
    ]
    const [post, setPost] = useState('')


    const onClickEvent = () => {
        setPost(post)
        const firebasePostServices = firebase.database().ref('asd')

        firebasePostServices.push(post)
    }

    return (
        <ul className="posts-lists">
            {info.map(x =>
                <PostCard post={x} />
            )}
            <button onClick={onClickEvent}>Click</button>
        </ul>
    );
};
export default Home;
