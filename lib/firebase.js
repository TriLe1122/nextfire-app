import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB7TqftxoMJGnV-YzPE8VE3tqK8GfQRp7w",
  authDomain: "nextfire-d73cf.firebaseapp.com",
  projectId: "nextfire-d73cf",
  storageBucket: "nextfire-d73cf.appspot.com",
  messagingSenderId: "993242298488",
  appId: "1:993242298488:web:6e9b03d4b8db9ebeab158d",
  measurementId: "G-05CBY10R1T"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
