
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3AmJSNuxNIKPQlGQG_bPzpmoifv_zD9A",
  authDomain: "react-5af08.firebaseapp.com",
  projectId: "react-5af08",
  storageBucket: "react-5af08.firebasestorage.app",
  messagingSenderId: "1052294793973",
  appId: "1:1052294793973:web:b57b377f532232fcd513bc",
  measurementId: "G-NVQB8PSLB9"
};

// 1_Conexion con Firebase
const app = initializeApp(firebaseConfig);
// 2_Conexion con la base de datos de Firestore
const analytics = getAnalytics(app);