import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDG8AekF-iu4UqQ0cHsJe3lRiesUH44U5Q",
    authDomain: "alkemy-hero.firebaseapp.com",
    projectId: "alkemy-hero",
    storageBucket: "alkemy-hero.appspot.com",
    messagingSenderId: "150836017759",
    appId: "1:150836017759:web:4f9dce764dcd2993d7b9ea",
    measurementId: "G-X3G9KD5294"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;