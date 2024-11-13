import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

//THIS IS THE METHOD FOR CREATION OF ACCOUNT
export const signUp = async(email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
};

//THIS IS THE METHOD TO LOG A USER IN
export const logIn = async(email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
};


// THIS IS THE METHOD TO SIGN UP WITH GOOGLE
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);

    return result
};


// THIS IS THE METHOD TO LOGOUT 
export const signOut = () => {
    return auth.signOut();
};

