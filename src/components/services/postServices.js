
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
export const getOne = (id) => {

    return firebaseDb.ref().child('posts').child(id).get();


}
export const deletePost = (id) => {
return firebaseDb.ref().child('posts').child(id).remove()
}
export const update=(title, category, imageURL, description,id)=> {
   
        const post = {
            title,
            category,
            imageURL,
            description,
        }
   
            return firebaseDb.ref().child('posts').child(id). update(post)
        
}