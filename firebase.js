// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-8MQmiMmF6HYiSfAuWfpWTOzkGgM56B0",
  authDomain: "busrecommend.firebaseapp.com",
  projectId: "busrecommend",
  storageBucket: "busrecommend.appspot.com",
  messagingSenderId: "636339001725",
  appId: "1:636339001725:web:cc4bb18ed055c3adb61414",
  databaseURL: "https://busrecommend-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
var app;
if(!firebase.apps.length){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const auth = firebase.auth();

export { auth, database };