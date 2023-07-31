import { collection, getDocs } from "firebase/firestore";
import { db } from "../auth/firebase";
import { createContext, useState, useReducer } from "react"

const initialMeetingRoomState = [];
export const MeetingRoomContext = createContext()
export const MeetingRoomContextProvider = (props) => {
    const [meetingRoom, dispatch] = useReducer(meetingRoomReducer, initialMeetingRoomState)

}

export const meetingRoomReducer = (state, action) => {
  // TODO action.types: "GET_ALL", "ADD_BOOKING", "UPDATE_BOOKING"
//   switch (action.type) {
//     case "GET_ALL":


//   }
};

const getAllRooms = () => {
    
}