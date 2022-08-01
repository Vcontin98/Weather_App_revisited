import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCWAFBiw_PnPkX10-3Eu8PeV4X97TvLlbU",
  authDomain: "fir-auth-909fe.firebaseapp.com",
  projectId: "fir-auth-909fe",
  storageBucket: "fir-auth-909fe.appspot.com",
  messagingSenderId: "515798411127",
  appId: "1:515798411127:web:8c644e22cc17e554232372"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;