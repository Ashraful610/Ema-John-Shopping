// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIvh4P_KvXWuPsUs4YRZZqcSTJ3sllu_E",
  authDomain: "ema-john-simple-57969.firebaseapp.com",
  projectId: "ema-john-simple-57969",
  storageBucket: "ema-john-simple-57969.appspot.com",
  messagingSenderId: "833498845419",
  appId: "1:833498845419:web:94688712e93bbf0cff6eae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth