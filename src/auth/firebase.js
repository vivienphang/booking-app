import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2P5JuMvLwVZ3s1M8b_7HbmfobjFU_2l0",
  authDomain: "booking-app-2e746.firebaseapp.com",
  projectId: "booking-app-2e746",
  storageBucket: "booking-app-2e746.appspot.com",
  messagingSenderId: "1057345326038",
  appId: "1:1057345326038:web:162c77b12ef0b57636f277",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize db
export const db = getFirestore(app);

// Get all data from collection
export const getMeetingRooms = async () => {
  const meetingRoomsRef = collection(db, "meeting-rooms");
  try {
    const meetingRoomsSnapshot = await getDocs(meetingRoomsRef);
    const data = meetingRoomsSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return data;
  } catch (err) {
    console.log("Error fetching meeting rooms:", err.message);
  }
};

// Get specific id from collection
export const getRoomDataById = async (documentId) => {
  try {
    const roomDataRef = doc(db, "meeting-rooms", documentId);
    const roomDataSnapshot = await getDoc(roomDataRef);

    if (roomDataSnapshot.exists()) {
      // The document exists, and you can access its data using the .data() method
      const roomData = roomDataSnapshot.data();
      console.log("Room data - ", roomData)
      return roomData;
    } else {
      // The document does not exist
      console.log("Document not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error.message);
    return null;
  }
};
