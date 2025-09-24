import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAxxVR8T0uA22Q7FbNgwifCmhw6Yy_2bs",
  authDomain: "miniblog-dce81.firebaseapp.com",
  projectId: "miniblog-dce81",
  storageBucket: "miniblog-dce81.firebasestorage.app",
  messagingSenderId: "268392805811",
  appId: "1:268392805811:web:cfe8ace800bbb5ab5bc7c6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
