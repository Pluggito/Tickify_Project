import { doc, setDoc, collection, getDocs, getDoc } from "@firebase/firestore";
import { db } from "../Auth/firebase";

export const getAllUsers = async () => {
    try {
      const usersCollectionRef = collection(db, "Users");
      const usersSnapshot = await getDocs(usersCollectionRef);
  
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return usersList;
    } catch (error) {}
  };


  export const getUserProfile = async (userId) => {
    try {
      const userDocRef = doc(db, "Users", userId);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        return userData;
      }
    } catch (error) {
        console.error(error)
    }
  };
  

