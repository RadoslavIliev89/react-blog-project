
import firebase from '../../utils/firebaseDB';
export const create = (title,category,imageUrl,description) => {
    const post ={
        title,
        category,
        imageUrl,
        description
    }
    const firebaseDb = firebase.database().ref('posts')
    return (
        firebaseDb.push(post)
    );
}