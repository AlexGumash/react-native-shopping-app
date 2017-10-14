import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDLYDEIb8LtfDaOs98ya0MxF4rq5dblDSw",
  authDomain: "example-app-62b8f.firebaseapp.com",
  databaseURL: "https://example-app-62b8f.firebaseio.com",
  projectId: "example-app-62b8f",
  storageBucket: "example-app-62b8f.appspot.com",
  messagingSenderId: "1003724149337"
};
firebase.initializeApp(config);

export const database = firebase.database();
