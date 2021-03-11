import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAD16usnegRlbil2zz6gvZjPAppLqfogdM",
    authDomain: "crwn-clothing-1cd2e.firebaseapp.com",
    projectId: "crwn-clothing-1cd2e",
    storageBucket: "crwn-clothing-1cd2e.appspot.com",
    messagingSenderId: "837235097728",
    appId: "1:837235097728:web:2e4299711d2551e5ee2665",
    measurementId: "G-X17VTRHT7D"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
