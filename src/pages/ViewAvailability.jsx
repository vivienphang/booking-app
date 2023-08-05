import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Grid } from "@mui/material";
import BookingForm from "../components/BookingForm";
import styles from "./calendar.module.css";
import { useEffect, useState } from "react";
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
    username: "",
  });
  const [events, setEvents] = useState([
    {
      title: "",
      date: "",
      start: "",
      end: "",
    },
  ]);

  let { id } = useParams();

  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };

  useEffect(() => {
    console.log("Rerendering; events have changed - ", events);
  }, [events]);

  return (
    <Grid container spacing={1} p={3}>
      <Grid item xs={8} className={styles.CalendarView}>
        <FullCalendar
          key={events.length} // force rerender of fullcalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={events}
          displayEventTime={true}
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
          events={events}
          setEvents={setEvents}
        />
      </Grid>
    </Grid>
  );
};

export default ViewAvailability;
