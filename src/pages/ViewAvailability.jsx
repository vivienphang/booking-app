import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Grid } from "@mui/material";
import BookingForm from '../components/BookingForm'

const ViewAvailability = () => {
  return (
    <Grid container spacing={1} p={3}>
        <Grid item xs={8} >
            <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </Grid>
        <Grid item xs={4}>
            <BookingForm />
        </Grid>
    </Grid>
  );
};

export default ViewAvailability;
