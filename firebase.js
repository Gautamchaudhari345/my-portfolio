
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDiKLdaHAJ35BfTUPBi5ibKFSqtvk0vGDE",
  authDomain: "my-portfolio-d7ba8.firebaseapp.com",
  projectId: "my-portfolio-d7ba8",
  storageBucket: "my-portfolio-d7ba8.appspot.com",
  messagingSenderId: "340148998140",
  appId: "1:340148998140:web:f86b8fb6b57bcdfb4dac79"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
