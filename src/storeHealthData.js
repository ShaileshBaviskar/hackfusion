import { db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

async function storeHealthData(data) {
  try {
    const docRef = await addDoc(collection(db, "healthData"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { storeHealthData };
