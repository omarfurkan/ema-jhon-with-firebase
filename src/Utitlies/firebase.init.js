// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJoOmC3vny7H7Ni68VKgWpmTYG5MYTOco",
    authDomain: "ema-john-simple-repeat.firebaseapp.com",
    projectId: "ema-john-simple-repeat",
    storageBucket: "ema-john-simple-repeat.appspot.com",
    messagingSenderId: "1084100326736",
    appId: "1:1084100326736:web:9b05421edd3a26a35e2855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)