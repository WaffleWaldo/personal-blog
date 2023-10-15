import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB3mJ8FI0Jg7A4vsyV4FpSgwlR6v5YUPX8",
    authDomain: "jason-f361a.firebaseapp.com",
    projectId: "jason-f361a",
    storageBucket: "jason-f361a.appspot.com",
    messagingSenderId: "616561544321",
    appId: "1:616561544321:web:7acbea801321ee01505180"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);