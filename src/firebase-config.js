import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7AIDup-u2iNzORPeeJ8UI7AO14cv_28w",
  authDomain: "react-crud-operation-b2a66.firebaseapp.com",
  projectId: "react-crud-operation-b2a66",
  storageBucket: "react-crud-operation-b2a66.appspot.com",
  messagingSenderId: "988750328952",
  appId: "1:988750328952:web:9022b2f6e7997e5684a98d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
