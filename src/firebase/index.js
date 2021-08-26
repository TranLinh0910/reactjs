import firebase from "firebase"
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC1dys9skAq1J5lYECMs1C09eLr2-eUcvQ",
    authDomain: "mypham-f55a6.firebaseapp.com",
    projectId: "mypham-f55a6",
    storageBucket: "mypham-f55a6.appspot.com",
    messagingSenderId: "369707708923",
    appId: "1:369707708923:web:122ad2826b82e39fb49b5e",
    measurementId: "G-P2X1X8BPST"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;