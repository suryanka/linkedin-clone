import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {getStorage, ref} from 'firebase/storage'

const firebaseApp = firebase.initializeApp({
  
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, getStorage, ref };
export default db;
