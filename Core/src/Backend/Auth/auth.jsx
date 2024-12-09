import { auth, db } from "./firebase";
import { doc, setDoc, updateDoc } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  sendEmailVerification,
  applyActionCode,
} from "firebase/auth";
import { getUserProfile } from "../User/UserService";

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
      emailVerified: false,
      createdAt: new Date(),
    };

    await setDoc(userRef, userData);
    await sendConfirmEmail();
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

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Extract user details
    const displayName = user.displayName || ""; // Ensure it's not null
    const email = user.email;
    const uid = user.uid; // Firebase UID
    const photoURL = user.photoURL;

    const [firstName = "", lastName = ""] = displayName.split(" ");

    const userRef = doc(db, "Users", uid); // Document with UID as ID
    await setDoc(userRef, {
      firstName,
      lastName,
      email,
      emailVerified: true,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }

  return result;
};

// THIS IS THE METHOD TO LOGOUT
export const signOut = () => {
  return auth.signOut();
};

export const forgetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email, {
      url: "http://localhost:5173/Tickify_Project/#/login-sign-up",
    });
    alert("An Email has been sent to " + email);
  } catch (error) {
    console.error(error);
  }
};

export const resetPassword = async (oobCode, newPassword) => {
  try {
    await confirmPasswordReset(auth, oobCode, newPassword);
  } catch (error) {
    console.log(error);
  }
};

export const sendConfirmEmail = async () => {
  try {
    await sendEmailVerification(auth.currentUser);

    //YOU CAN CHANGE THE ALERT TO SOMETHING FINER
    alert("Email Verification Link Sent Has Been Sent To You");
  } catch (error) {
    alert(error)
    console.error(error);
  }
};

export const verifyEmail = async (oobCode, navigate) => {
  try {
    //FUNCTION TO VERIFY THE OOBCODE
    await applyActionCode(auth, oobCode);
    await auth.currentUser.reload();
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userDocRef = doc(db, "Users", currentUser.uid);
      await updateDoc(userDocRef, { emailVerified: true });
      alert("Email successfully verified");
    } else {
      alert("User is not logged in. Email verification was successful.");
      navigate("/login-sign-up"); // Redirect user to log in
    }
  } catch (error) {
    console.error("Email verification failed:", error);
  }
};


export const getVerifiedEmail = async () => {
  const userl = await getUserProfile(auth.currentUser.uid)
  const emailVerified = userl.emailVerified

  return emailVerified
     
}