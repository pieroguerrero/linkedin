import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyA1j9XA0yvrqjrr7ooqrAOqIGjGv1RbfXo",
  authDomain: "linkedin-39dcf.firebaseapp.com",
  projectId: "linkedin-39dcf",
  storageBucket: "linkedin-39dcf.appspot.com",
  messagingSenderId: "150636622094",
  appId: "1:150636622094:web:480aba5dc1b796e143675f",
};

initializeApp(config);

const appDB = getFirestore();
const appStorage = getStorage();
const appAuthProvider = getAuth();

export { appDB, appStorage, appAuthProvider };
