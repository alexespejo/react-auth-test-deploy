// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBZ-LrXFUaO_XACTHES5hT1SsEF0QcOuwo",
 authDomain: "nextfire-b5faf.firebaseapp.com",
 projectId: "nextfire-b5faf",
 storageBucket: "nextfire-b5faf.appspot.com",
 messagingSenderId: "232262259816",
 appId: "1:232262259816:web:4fe66896a4b33433a197dd",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };

// export const signUpNewUser = async (email: string, password: string) => {
//  //   const auth = getAuth();
//  createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//    // Signed up
//    const user = userCredential.user;
//    alert("shit works");
//   })
//   .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//    alert("shit did not work");
//    console.log(errorMessage);
//   });
// };
//
// export const getCurrentUser = () => {
//  alert(auth.currentUser?.displayName);
// };
//
// export const signInUser = async (email: string, password: string) => {
//  signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//    const user = userCredential.user;
//    alert("sign in works");
//   })
//   .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//    alert("sign in fucked");
//   });
// };
