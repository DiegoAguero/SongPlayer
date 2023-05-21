import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCA3Mel4JCjPbIjb887o6fX77UgTRr0blA",
    authDomain: "song-player-back.firebaseapp.com",
    projectId: "song-player-back",
    storageBucket: "song-player-back.appspot.com",
    messagingSenderId: "611330811834",
    appId: "1:611330811834:web:a7aaea10824a58fadb1f83",
  };
// Inicializamos firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}