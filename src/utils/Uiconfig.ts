import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyA5heY93tcjP8jIZG9Xdz-OgnTRmzUvH3I',
  authDomain: 'whatzhot-d4be8.firebaseapp.com',
  databaseURL: 'https://whatzhot-d4be8.firebaseio.com',
  projectId: 'whatzhot-d4be8',
  storageBucket: 'whatzhot-d4be8.appspot.com',
  messagingSenderId: '586486734887',
  appId: '1:586486734887:web:bc62a3d980f3c13e61ee02'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
