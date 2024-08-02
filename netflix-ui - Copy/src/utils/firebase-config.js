// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxylzplZN_fDN9gq6_EPt4OSNIZHpbFUQ",
  authDomain: "react-netflix-clone-751b6.firebaseapp.com",
  projectId: "react-netflix-clone-751b6",
  storageBucket: "react-netflix-clone-751b6.appspot.com",
  messagingSenderId: "986569619660",
  appId: "1:986569619660:web:c5f70cf4e78da5c20eea69"
};

// Initialize Firebase application
const app = initializeApp(firebaseConfig);

// firebase auth will point to netflix-clone application
export const firebaseAuth = getAuth(app);

