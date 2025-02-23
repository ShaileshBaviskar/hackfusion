import { db } from '../firebase/config';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const healthService = {
  // Add new health record
  async addHealthRecord(data) {
    try {
      const docRef = await addDoc(collection(db, 'healthRecords'), {
        ...data,
        timestamp: new Date(),
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding health record:', error);
      return { success: false, error };
    }
  },

  // Get health records for a user
  async getHealthRecords(userId) {
    try {
      const q = query(
        collection(db, 'healthRecords'),
        where('userId', '==', userId)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching health records:', error);
      return [];
    }
  }
};
