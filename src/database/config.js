import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBywpaZoNU4JSs8Igd3pNxEC_l_rqrfFtg",
    authDomain: "photowall-47a52.firebaseapp.com",
    databaseURL: "https://photowall-47a52-default-rtdb.firebaseio.com",
    projectId: "photowall-47a52",
    storageBucket: "photowall-47a52.appspot.com",
    messagingSenderId: "129758232521",
    appId: "1:129758232521:web:7172d630b6072d7273f218"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {database}