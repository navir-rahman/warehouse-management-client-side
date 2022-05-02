// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpP5Jdhy_dRmg_LxHfOyTWckrs74KQa6w",
  authDomain: "assignment-11-e50b7.firebaseapp.com",
  projectId: "assignment-11-e50b7",
  storageBucket: "assignment-11-e50b7.appspot.com",
  messagingSenderId: "374846969713",
  appId: "1:374846969713:web:1a473f9bbdaf06de0ac8d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;