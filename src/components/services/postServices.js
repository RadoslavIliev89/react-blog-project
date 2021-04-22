
import firebase from '../../utils/firebaseDB';

const firebaseDb = firebase.database().ref('posts');

export const create = (title, category, imageURL, description,) => {
    const post = {
        title,
        category,
        imageURL,
        description,
    }
    const autoId = firebaseDb.push().key;
    return (

        firebaseDb.child(autoId).set(post)
    );
}

export const get = () => {
    firebaseDb.on('value', getData)
    function getData(data) {
        console.log(data);
        return data;
    }
}