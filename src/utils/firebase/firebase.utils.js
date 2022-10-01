import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg6IA-T8a8eKy2Imzmxtrn65t3fLcLmYA",
  authDomain: "crwn-clothing-db-ab346.firebaseapp.com",
  projectId: "crwn-clothing-db-ab346",
  storageBucket: "crwn-clothing-db-ab346.appspot.com",
  messagingSenderId: "925325525229",
  appId: "1:925325525229:web:eedebfcd09c00c1acb0ce4",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDOcumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error create the user", error.message);
    }
  }

  return userDocRef;
};
