// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe-jr_cI9O7XuqqchWOg2uLBfKY_NKJWk",
  authDomain: "chef-recipe-hunter-8e887.firebaseapp.com",
  projectId: "chef-recipe-hunter-8e887",
  storageBucket: "chef-recipe-hunter-8e887.appspot.com",
  messagingSenderId: "422507081640",
  appId: "1:422507081640:web:b3f6364a8481beb43bb79d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app