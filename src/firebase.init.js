// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANt28no0t8OflVjKut6Yj8GsBRSBsgg58",
    authDomain: "car-servicing-c9a35.firebaseapp.com",
    projectId: "car-servicing-c9a35",
    storageBucket: "car-servicing-c9a35.appspot.com",
    messagingSenderId: "317173257128",
    appId: "1:317173257128:web:134c7476789acca491439d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;