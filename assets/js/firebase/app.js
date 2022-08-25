// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZtp8JnlMjvijRRTcvhnXQBPXXdIZZtW4",
    authDomain: "dio-mundo-invertido-8755b.firebaseapp.com",
    projectId: "dio-mundo-invertido-8755b",
    storageBucket: "dio-mundo-invertido-8755b.appspot.com",
    messagingSenderId: "692664871140",
    appId: "1:692664871140:web:9388ad268b3fe5946d64f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app