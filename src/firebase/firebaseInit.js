import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';



firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default db;
