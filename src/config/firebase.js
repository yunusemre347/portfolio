// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GithubAuthProvider, GoogleAuthProvider} from "firebase/auth"
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw5Zd5ZVjMMJLOCOaOrYnBjQSR6O1HG4I",
  authDomain: "myportfolio-4a001.firebaseapp.com",
  projectId: "myportfolio-4a001",
  storageBucket: "myportfolio-4a001.appspot.com",
  messagingSenderId: "888678314002",
  appId: "1:888678314002:web:21492f60699b35cd4e68cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const ghProvider = new GithubAuthProvider();  domain lazım önce
export const db = getFirestore(app);