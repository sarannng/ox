// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCkv6R3lYVEyBXVNnx3eyX7dVOQeIMHc8",
  authDomain: "zerox-a289e.firebaseapp.com",
  projectId: "zerox-a289e",
  storageBucket: "zerox-a289e.appspot.com",
  messagingSenderId: "869644773994",
  appId: "1:869644773994:web:ce9665ee5a5e9f8054f813",
  measurementId: "G-0WM4JE7G85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);