import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {getStorage, ref} from 'firebase/storage'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAeIfuS746gN5R9C5UUBR04-iM5vyMWJwM",
  authDomain: "linkedin-clone-77667.firebaseapp.com",
  projectId: "linkedin-clone-77667",
  storageBucket: "linkedin-clone-77667.appspot.com",
  messagingSenderId: "810340181559",
  appId: "1:810340181559:web:9506eed82493a172a081b2",
  measurementId: "G-42ZGBRR58F",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, getStorage, ref };
export default db;
