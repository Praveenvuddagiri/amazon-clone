import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXf7r42B-20dHDVnXZL9uc4-b058fcCrQ",
    authDomain: "clone-9d621.firebaseapp.com",
    projectId: "clone-9d621",
    storageBucket: "clone-9d621.appspot.com",
    messagingSenderId: "802219933437",
    appId: "1:802219933437:web:127a7be825281fa1128894",
    measurementId: "G-ZJKX5GEGPF"
  })

  const auth = firebase.auth();
  export default auth;