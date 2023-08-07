import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Grid } from "@mui/material";
import BookingForm from "../components/BookingForm";
import styles from "./calendar.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllBookings } from "../auth/firebase";

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
  const [events, setEvents] = useState([]);
  const [bookingDataArray, setBookingDataArray] = useState([]); // State for booking data
  const [isModalOpen, setIsModalOpen] = useState(false)

  let { id } = useParams();

  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };

  const handleEventClick = (info) => {
    setIsModalOpen(true)
    console.log("Clicked event: ", info.event)
  }

  const handleEventClose = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getAllBookings();
      console.log("BookingsData in ViewAvailability - ", data);
      setBookingDataArray(data);
    };
    fetchBookings();
  }, [events]);

  const formattedEvents = async () => {
    const formattedData = await Promise.all(
      bookingDataArray.map((bookingData) => ({
        title: bookingData.title,
        start: new Date(`${bookingData.date}T${bookingData.startTime}:00`),
        end: new Date(`${bookingData.date}T${bookingData.endTime}:00`),
      }))
    );
    return formattedData;
  };

  return (
    <Grid container spacing={1} p={3}>
      <Grid item xs={8} className={styles.CalendarView}>
        <FullCalendar
          //   key={events.length} // force rerender of fullcalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          events={formattedEvents}
          displayEventTime={true}
          height={"80vh"}
          eventClick={handleEventClick}
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
