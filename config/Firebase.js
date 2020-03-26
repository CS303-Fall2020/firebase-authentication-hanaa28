import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB83jvFvdv6JPsvaZTJm4XhrzJZyfjLE_E",
    authDomain: "hanna-23e62.firebaseapp.com",
    databaseURL: "https://hanna-23e62.firebaseio.com",
    projectId: "hanna-23e62",
    storageBucket: "hanna-23e62.appspot.com",
    messagingSenderId: "670885439352",
    appId: "1:670885439352:web:613a63827f7a6826be8a8d",
    measurementId: "G-LDYX0YFW8Q"
  };
  const Firebase= firebase.initializeApp(firebaseConfig);
  export default Firebase;