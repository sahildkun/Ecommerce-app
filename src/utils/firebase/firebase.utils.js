import {initializeApp}  from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCNiJCA-_Vap3zRlUMok9n9YHd3xbztwqc",
  authDomain: "ecom-db-e7531.firebaseapp.com",
  projectId: "ecom-db-e7531",
  storageBucket: "ecom-db-e7531.appspot.com",
  messagingSenderId: "398208393516",
  appId: "1:398208393516:web:d31c73b1a4050a6f39cc89"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect(auth,googleProvider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {}) => {

  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

// export const createAuthUserwithEmailandPassword = async(email,password)=>{

//     if(!email || !password) return;
//     return await createUserWithEmailAndPassword(auth,email,password);
// }
export const createAuthUserWithEmailAndPassword = async (email, password) => {
   
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };


  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  }
  export const signOutUser = async () => await signOut(auth);


  export const onAuthStateChangedListener = (callback ) => {
    onAuthStateChanged(auth,callback)
    //if you are not giving me a callback i am not even gonna work
    //invokes whenever the user authenticates in or the user authenticates out
    
  }