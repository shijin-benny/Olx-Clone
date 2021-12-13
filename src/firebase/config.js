import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBD7dwT5YStyu3YDviPctfIluLTBPo8tbc",
    authDomain: "lively-machine-329813.firebaseapp.com",
    projectId: "lively-machine-329813",
    storageBucket: "lively-machine-329813.appspot.com",
    messagingSenderId: "125054131500",
    appId: "1:125054131500:web:fdf09254dd4c9d5f45a089",
    measurementId: "G-MTHHDC5NHF"
  };

 export default firebase.initializeApp(firebaseConfig )