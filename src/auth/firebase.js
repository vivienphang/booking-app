import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  addDoc,
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

// Get all data from collection => meeting rooms
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

// Get all data from collection => bookings
export const getAllBookings = async () => {
  const allBookingsRef = collection(db, "bookings");
  try {
    const allBookingsSnapshot = await getDocs(allBookingsRef);
    const data = allBookingsSnapshot.docs.map((doc) => {
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
      // console.log("Room data - ", roomData)
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

// Add a new booking to bookings collection
export const addNewBooking = async (formInput) => {
  if (!formInput) {
    return;
  } else {
    console.log("Form input - ", formInput);
    const bookingsCollectionRef = collection(db, "bookings");
    const newBooking = {
      roomName: formInput.roomName,
      title: formInput.title,
      date: formInput.date,
      startTime: formInput.startTime,
      endTime: formInput.endTime,
      username: formInput.username,
    }

    try {
      const newBookingDocRef = await addDoc(bookingsCollectionRef, newBooking);
      console.log("New booking in firebase: ", newBookingDocRef)
      return {
        bookingId: newBookingDocRef.id,
        newBooking: newBooking
      }
    } catch (err) {
      console.log("Error", err.message)
      return null;
    }
  }
}

