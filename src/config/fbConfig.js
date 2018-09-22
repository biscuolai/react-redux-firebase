import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyC5BZP5eGilN4ndhUo-5_bsRh9zMOS56nA",
  authDomain: "react-redux-projectplan.firebaseapp.com",
  databaseURL: "https://react-redux-projectplan.firebaseio.com",
  projectId: "react-redux-projectplan",
  storageBucket: "react-redux-projectplan.appspot.com",
  messagingSenderId: "770938964224"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 