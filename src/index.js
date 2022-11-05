// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQCqGWWBIj3j3Vc_KIck-ihjss7DMUIfY",
  authDomain: "online-canteen-2e2e2.firebaseapp.com",
  projectId: "online-canteen-2e2e2",
  storageBucket: "online-canteen-2e2e2.appspot.com",
  messagingSenderId: "318495370679",
  appId: "1:318495370679:web:2e3869e991684229eb0c32",
  measurementId: "G-MGLC877B99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)