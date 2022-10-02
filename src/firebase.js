import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzhARVn89hEMiBED7DCggRpN3PL6N6jZQ",
    authDomain: "todo-list-f0a3c.firebaseapp.com",
    databaseURL: "https://todo-list-f0a3c-default-rtdb.firebaseio.com",
    projectId: "todo-list-f0a3c",
    storageBucket: "todo-list-f0a3c.appspot.com",
    messagingSenderId: "534530284895",
    appId: "1:534530284895:web:3bd3cbdd9bcfdafa5baaea",
    measurementId: "G-6Z45E49J2V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();
