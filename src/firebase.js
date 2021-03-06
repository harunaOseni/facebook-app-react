import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB74ewJ5OMfIBbbfps_2BHmTkThMoNTvZ8",
  authDomain: "facebook-app-react.firebaseapp.com",
  projectId: "facebook-app-react",
  storageBucket: "facebook-app-react.appspot.com",
  messagingSenderId: "477768314728",
  appId: "1:477768314728:web:d5f23ae37f12df7fe070dd",
  measurementId: "G-7Z0TXM47Q5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;