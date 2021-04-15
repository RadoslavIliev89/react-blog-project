import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCxz0nrIERLBgQE7dlPjMecBdPdVWZkaVM",
    authDomain: "blog-project-1d416.firebaseapp.com",
    databaseURL: "https://blog-project-1d416-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blog-project-1d416",
    storageBucket: "blog-project-1d416.appspot.com",
    messagingSenderId: "423343649701",
    appId: "1:423343649701:web:b8c0526079911e90112e4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
