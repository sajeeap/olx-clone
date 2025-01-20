// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyASnuVTF6TrntTAiXcC2PAPIIf3yYv9Lhk",
  authDomain: "olx-clone-5d867.firebaseapp.com",
  projectId: "olx-clone-5d867",
  storageBucket: "olx-clone-5d867.firebasestorage.app",
  messagingSenderId: "854480321913",
  appId: "1:854480321913:web:c6c8cc232b804454de03a8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);


