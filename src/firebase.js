
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0qdJnJgvGiWNrX0_8cDnk1IM7dbl4p3U",
  authDomain: "movieapp-fedb3.firebaseapp.com",
  projectId: "movieapp-fedb3",
  storageBucket: "movieapp-fedb3.appspot.com",
  messagingSenderId: "726829671072",
  appId: "1:726829671072:web:b71edb16b9031fd1aedfc5",
  measurementId: "G-TVTTD5XJ1H"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);