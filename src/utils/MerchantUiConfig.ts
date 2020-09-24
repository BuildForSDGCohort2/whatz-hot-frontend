import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBhGjHaMJcOpip-EYLEnPf5X8JwsePOV58',
  authDomain: 'whatzhot-biz.firebaseapp.com',
  databaseURL: 'https://whatzhot-biz.firebaseio.com',
  projectId: 'whatzhot-biz',
  storageBucket: 'whatzhot-biz.appspot.com',
  messagingSenderId: '76187464623',
  appId: '1:76187464623:web:943afe78e2e40d0c6ab55a'
};

const firebasemerch = firebase;
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const authmerch = firebase.auth;
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db, authmerch, firebasemerch };
