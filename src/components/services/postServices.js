
import firebase from '../../utils/firebaseDB';

const firebaseDb = firebase.database();

export const create = (title, category, imageURL, description,) => {
    const post = {
        title,
        category,
        imageURL,
        description,
    }
    const autoId = firebaseDb.ref('posts').push().key;
    return (

        firebaseDb.ref('posts').child(autoId).set(post)
    );
}

export const getAll = () => {

    return firebaseDb.ref().get()
       
}