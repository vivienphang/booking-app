import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"
import { Grid } from "@mui/material";
import BookingForm from '../components/BookingForm'
import styles from "./calendar.module.css"
import { useState } from "react";
import { useParams } from "react-router-dom";

const ViewAvailability = () => {
    const [bookingData, setBookingData] = useState({
        title: "",
        date: "",
        startTime: "",
        endTime: "",
        roomId: ""
    })
    let { id } = useParams();
    
    const handleDateClick = (arg) => {
        console.log(arg.dateStr)
    }

  return (
    <Grid container spacing={1} p={3}>
        <Grid item xs={8} className={styles.CalendarView} >
            <FullCalendar plugins={[dayGridPlugin, interactionPlugin]} initialView="dayGridMonth"
            dateClick={handleDateClick} />
        </Grid>
        <Grid item xs={4}>
            <BookingForm setBookingData={setBookingData} bookingData={bookingData} roomId={id}/>
        </Grid>
    </Grid>
  );
};

export default ViewAvailability;
