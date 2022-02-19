// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEF5LE6106A3SF5Puiqu0jzRB-IPMn4CY",
  authDomain: "automotores-73959.firebaseapp.com",
  projectId: "automotores-73959",
  storageBucket: "automotores-73959.appspot.com",
  messagingSenderId: "697215369643",
  appId: "1:697215369643:web:f909ce3979ee770756d2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}