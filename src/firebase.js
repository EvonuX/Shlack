import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAWj28GyQIk0f20ynxYaz88_QGuasbFGas",
  authDomain: "react-slack-ff18c.firebaseapp.com",
  databaseURL: "https://react-slack-ff18c.firebaseio.com",
  projectId: "react-slack-ff18c",
  storageBucket: "react-slack-ff18c.appspot.com",
  messagingSenderId: "468195551030"
};

firebase.initializeApp(config);

export default firebase;
