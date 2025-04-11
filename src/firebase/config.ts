
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByIuhel6F4aWBiDUgm0ZclExF92ZKc10Q",
  authDomain: "manitaselpana.firebaseapp.com",
  projectId: "manitaselpana",
  storageBucket: "manitaselpana.appspot.com", // corregido
  messagingSenderId: "999278510279",
  appId: "1:999278510279:web:88a7dc8d86e5423e753ee2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
