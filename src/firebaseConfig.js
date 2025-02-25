import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyABlCShOmt1uznuwQXlH5XKNy2w6UbFTS8",
    authDomain: "final-project-129a8.firebaseapp.com",
    projectId: "final-project-129a8",
    storageBucket: "final-project-129a8.firebasestorage.app",
    messagingSenderId: "664417530536",
    appId: "1:664417530536:web:f264ab072cd9d01a52889d",
    measurementId: "G-BC2D4JVNR4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};