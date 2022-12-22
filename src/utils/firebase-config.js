import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD1jpkJkgAg9_jBh-JmTaT3PRvYVO44EZU",
  authDomain: "netflix-clone-cc0b1.firebaseapp.com",
  projectId: "netflix-clone-cc0b1",
  storageBucket: "netflix-clone-cc0b1.appspot.com",
  messagingSenderId: "950735048619",
  appId: "1:950735048619:web:0e7641d3c47a1d44e20cee",
  measurementId: "G-LHKXY3NZMR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
