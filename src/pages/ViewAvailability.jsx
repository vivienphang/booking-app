import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Grid } from "@mui/material";
import BookingForm from "../components/BookingForm";
import styles from "./calendar.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ViewAvailability = () => {
  const [selectedRoomData, setSelectedRoomData] = useState({
    name: "",
    size: "",
    equipment: [],
  });
  const [bookingForm, setBookingForm] = useState({
    roomName: "",
    title: "",
    date: "",
    startTime: "",
    endTime: "",
  });
  let { id } = useParams();

  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };
  const events = [
    {
      title: "Title",
      start: "2023-08-05T08:00:00",
      end: "2023-08-05T09:00:00",
    },
  ];

  return (
    <Grid container spacing={1} p={3}>
      <Grid item xs={8} className={styles.CalendarView}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={events}
          height={"80vh"}
        />
      </Grid>
      <Grid item xs={4}>
        <BookingForm
          selectedRoomData={selectedRoomData}
          setSelectedRoomData={setSelectedRoomData}
          setBookingForm={setBookingForm}
          bookingForm={bookingForm}
          roomId={id}
        />
      </Grid>
    </Grid>
  );
};

export default ViewAvailability;
