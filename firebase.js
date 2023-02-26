// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa7jWVN4zmh0kL0h9iocZuvfv1EnNjqPE",
  authDomain: "smart-attendance-login-auth.firebaseapp.com",
  projectId: "smart-attendance-login-auth",
  storageBucket: "smart-attendance-login-auth.appspot.com",
  messagingSenderId: "886855100800",
  appId: "1:886855100800:web:f90bade0174c57d6e87965",
  measurementId: "G-HV9LRD4PPD"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
    app= initializeApp(firebaseConfig);
}
else{
    app=firebase.app();
}
const auth =firebase.auth();
const analytics = getAnalytics(app);

export {auth};