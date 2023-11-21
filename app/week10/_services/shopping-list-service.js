import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
      const userItemsRef = collection(db, `users/${userId}/items`);
      const userItemsSnapshot = await getDocs(userItemsRef);
  
      const items = [];
      userItemsSnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          data: doc.data(),
        });
      });
  
      return items;
    } catch (error) {
      console.error("Error getting items:", error);
      throw error;
    }
  };

  export const addItem = async (userId, newItem) => {
    try {
      const userItemsRef = collection(db, `users/${userId}/items`);
      const newDocRef = await addDoc(userItemsRef, newItem);
  
      return newDocRef.id;
    } catch (error) {
      console.error("Error adding item:", error);
      throw error;
    }
  };
