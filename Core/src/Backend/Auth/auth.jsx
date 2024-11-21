import { auth, db } from "./firebase";
import { doc, setDoc } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";

export const signUp = async (email, password, fName, lName) => {
  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userId = userCred.user.uid;
    const userRef = doc(db, "Users", userId);

    const userData = {
      firstName: fName,
      lastName: lName,
      email: email,
      createdAt: new Date(),
    };

    await setDoc(userRef, userData);
  } catch (error) {
    console.error("Error signing up and adding user data: ", error.message);
  }
};

//THIS IS THE METHOD TO LOG A USER IN
export const logIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// THIS IS THE METHOD TO SIGN UP WITH GOOGLE
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
};

// THIS IS THE METHOD TO LOGOUT
export const signOut = () => {
  return auth.signOut();
};

export const forgetPassword = async (email) =>{
  try {
    
    await sendPasswordResetEmail(auth,email,{url:'http://localhost:5173/Tickify_Project/#/login-sign-up'})
    alert("An Email has been sent to " + email)
  } catch (error) {
    console.error(error)
  }
};

export const resetPassword = async (oobCode,newPassword) => {
  try {
    await confirmPasswordReset(auth,oobCode,newPassword)
  } catch (error) {
    console.log(error)
  }
}

