import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC9kelIwNLZRdo1QlBlpf9Kctj8lSCVAGo",
  authDomain: "react-tudoist.firebaseapp.com",
  databaseURL: "https://react-tudoist.firebaseio.com",
  projectId: "react-tudoist",
  storageBucket: "react-tudoist.appspot.com",
  messagingSenderId: "472794620490",
  appId: "1:472794620490:web:5b1c8631657fecb13efcb3"
});

export { firebaseConfig as firebase };
