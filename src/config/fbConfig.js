import firebase  from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLU9_e9HyeYG6cNAJaDrHcUBNep50EJU8",
    authDomain: "navigus-test-199d1.firebaseapp.com",
    databaseURL: "https://navigus-test-199d1.firebaseio.com",
    projectId: "navigus-test-199d1",
    storageBucket: "navigus-test-199d1.appspot.com",
    messagingSenderId: "860748341052",
    appId: "1:860748341052:web:8716448b71da2fbc008839"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({timestampsInSnapshots:true})

  export const db = firebase.firestore()
  export const auth = firebase.auth()

  export default firebase;