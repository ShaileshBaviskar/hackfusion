import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBD9Wrk2GCyoS9ep9mWaUmTJ_vCHynjwz4",
  authDomain: "collegeerp-28d89.firebaseapp.com",
  projectId: "collegeerp-28d89",
  storageBucket: "collegeerp-28d89.firebasestorage.app",
  messagingSenderId: "593578347296",
  appId: "1:593578347296:web:4f66f7121308a4bb5ca545",
  measurementId: "G-ZQ0MG9V5SZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
