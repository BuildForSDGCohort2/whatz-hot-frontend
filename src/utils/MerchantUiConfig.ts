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

let merchantApp = firebase.apps.find((app) => {
  return app.name === 'MerchantApp';
});
if (!merchantApp) {
  merchantApp = firebase.initializeApp(config, 'MerchantApp');
}

export const merchantAuth = merchantApp.auth();
