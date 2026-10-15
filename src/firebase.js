// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW1zuvy5OdLVPefaxg-bXWn6AdhiXLZX4",
    authDomain: "korean-smile-snack.firebaseapp.com",
    databaseURL: "https://korean-smile-snack-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "korean-smile-snack",
    storageBucket: "korean-smile-snack.firebasestorage.app",
    messagingSenderId: "829390236552",
    appId: "1:829390236552:web:d802af2565ffc521b1283d",
    measurementId: "G-3EZENHXXK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);